const express = require("express");
const session = require("express-session");
const fs = require("fs");
const multer = require("multer");
const app = express();
const startDb = require("./database/init");
const userModel = require("./database/models/user");
const getUserData = require("./controllers/getUserData");
const getAllProducts = require("./controllers/getAllProducts");
const postAllProducts = require("./controllers/postAllProducts");
const postUserSignup = require("./controllers/postUserSignup");
const forgotPassword = require("./controllers/forgotPassword");
const forgotPasswordEmail = require("./controllers/forgotPasswordEmail");
const productModel = require("./database/models/products");
startDb();

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
    }))

var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, callback) {
    callback(null, file.originalname);
    }
    });
var upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.route("/").get(getAllProducts);
app.route("/").post(postAllProducts);

app.get("/postSignup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/postSignup.html");
})


app.get("/login", (request, response)=>{
    if(request.session.isLoggedIn){
        response.redirect("/");
    }
    response.sendFile(__dirname+"/public/html/login.html");
}).post("/login", (request, response)=>{
    getUserData(request.body, (err, data)=>{
        if(err){
            console.log("Error Logging In");
            response.redirect("/login");
        }else{

            let user = data;
            console.log(user);
            if(user.length){
                if(user[0].isVerified){
                    request.session.email = user[0].email;
                    request.session.username = user[0].username;
                    request.session.isLoggedIn = true;
                    request.session.profile = user[0].profile;
                    response.redirect("/");
                }else{
                    response.redirect("/login");
                }
            }else{
                response.redirect("/login");
            }
    }
    })
})

app.get("/signup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/signup.html");
})
app.post("/signup", upload.single("profile"), postUserSignup);

app.get("/logout", (request, response)=>{
    request.session.destroy((err)=>{
        if(err){
            console.log("Erros destroying session");
        }else{
            console.log("Session Destroy");
            response.redirect("/login");
        }
    })
})

app.route("/getAllProducts").get(getAllProducts);

app.get("/verify", (request, response)=>{
    console.log(request.query);
    userModel.updateOne({email:request.query.email}, {isVerified:true})
    .then((data)=>{
        console.log(data);
        response.redirect("/login");
    }).catch(()=>{
        console.log("error verifying");
        response.send("verification pending");
    })
})

app.get("/forgotPassword", (request, response)=>{
    request.session.email = request.query.email;
    response.sendFile(__dirname+"/public/html/forgotPassword.html");
})
app.post("/forgotPassword",forgotPassword);


app.get("/forgotPasswordEmail", (request, response)=>{
    response.sendFile(__dirname+"/public/html/forgotPasswordEmail.html");
}).post("/forgotPasswordEmail", forgotPasswordEmail);

app.get("/forgotPasswordEmailSent", (request, response)=>{
    response.sendFile(__dirname+"/public/html/forgotPasswordEmailSent.html");
})

app.post("/addProductToCart", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = data[0].cart;
        cart.push({productName:request.body.productName, quantity:1});
        userModel.updateOne({email:request.session.email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product added to cart");
            response.redirect("/");
        }).catch((e)=>{
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log('Error adding product to cart');
    })
})

app.post("/removeProductFromCart", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = data[0].cart;
        let Index = 0;
        let match = cart.filter((value, index)=>{
            if(request.body.productName === value.productName){
                Index = index;
                return true;
            }
        })
        cart.splice(Index, 1);
        userModel.updateOne({email:request.session.email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product added to cart");
            response.redirect("/viewCart");
        }).catch((e)=>{
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log('Error adding product to cart');
    })
})


app.post("/incrementInCart", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = JSON.parse(JSON.stringify(data[0].cart));
        let Index = 0;
        let match = cart.filter((value, index)=>{
            if(value.productName === request.body.productName){
                Index = index;
                return true;
            }
        });
        let curCount = match[0].quantity;
        cart[Index].quantity = curCount+1;
        userModel.updateOne({email:request.session.email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product count updated to cart");
            response.redirect("/viewCart");
        }).catch((e)=>{
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log(e);
        console.log('Error adding product to cart');
    })
})

app.post("/decrementInCart", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = JSON.parse(JSON.stringify(data[0].cart));
        let Index = 0;
        let match = cart.filter((value, index)=>{
            if(value.productName === request.body.productName){
                Index = index;
                return true;
            }
        });
        let curCount = match[0].quantity;
        cart[Index].quantity = curCount-1;
        userModel.updateOne({email:request.session.email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product count updated to cart");
            response.redirect("/viewCart");
        }).catch((e)=>{
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log(e);
        console.log('Error adding product to cart');
    })
})



app.get("/viewCart", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        let cart = data[0].cart;
        let names = [];
        let dict = {};
        for(var i=0;i<cart.length;i++){
            names.push(cart[i].productName);
            dict[cart[i].productName] = cart[i].quantity;
        }
        productModel.find({ "productName":{$in:names}})
        .then((data)=>{
            let newData = JSON.parse(JSON.stringify(data));
            for(var j=0;j<newData.length;j++){
                newData[j].count = dict[newData[j].productName];
                console.log(newData[j]);
            }
            response.render("userCart", {username:request.session.username, profile:request.session.profile, products:newData});
        }).catch((e)=>{
            console.log(e);
        })
    }).catch((e)=>{
        console.log(e);
    })
})

// function getUserData(form, callback) {
//     console.log(form);
//     userModel.find({username:form.username, password:form.password})
//     .then((data)=>{

//         if(data.length){
//             callback(false, data);
//         }else{
//             callback(true);
//         }

//     }).catch((e)=>{
//         console.log(e);
//         console.log("error getting data from db");
//         callback(true);
//     });
// }
// function getUserData(callback) {
//     fs.readFile("credentials.json", (err, data)=>{
//         if(err){
//             console.log("Error Reading Data From File");
//             callback(true);
//         }else{
//             console.log("File Read Successfully");
//             callback(false, JSON.parse(data));
//         }
//     })
// }


// function getProducts(callback) {
//     fs.readFile("products.json", (err, data)=>{
//         if(err){
//             console.log("Error Reading Data From File");
//             callback(true);
//         }else{
//             console.log("File Read Successfully");
//             // console.log(JSON.parse(data));
//             callback(false, JSON.parse(data));
//         }
//     })
// }

// function writeUserData(data, callback) {
//     fs.writeFile("credentials.json", JSON.stringify(data), (err)=>{
//         if(err){
//             console.log("Error Writing Data To File");
//             callback(true);
//         }else{
//             console.log("Written Data Successfully");
//             callback(false);
//         }
//     })
// }

app.listen(3000, ()=>{
    console.log("Server Ready!");
})