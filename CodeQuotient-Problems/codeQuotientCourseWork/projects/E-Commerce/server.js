const express = require("express");
const session = require("express-session");
const fs = require("fs");
const multer = require("multer");
const app = express();
const startDb = require("./database/init");
const userModel = require("./database/models/user");
const getAllProducts = require("./controllers/getAllProducts");
const adminGetAllProducts = require("./controllers/adminGetAllProducts");
const postAllProducts = require("./controllers/postAllProducts");
const postUserSignup = require("./controllers/postUserSignup");
const forgotPassword = require("./controllers/forgotPassword");
const forgotPasswordEmail = require("./controllers/forgotPasswordEmail");
const productModel = require("./database/models/products");
const removeProductFromCart = require("./controllers/removeProductFromCart");
const postLogin = require("./controllers/postLogin");
const logoutUser = require("./controllers/logoutUser");
const deleteProduct = require("./controllers/deleteProduct");
const verifyUser = require("./controllers/verifyUser");
const addProductToCart = require("./controllers/addProductToCart");
const addProduct = require("./controllers/addProduct");
const modifyProduct = require("./controllers/modifyProduct");
const incrementInCart = require("./controllers/incrementInCart");
const decrementInCart = require("./controllers/decrementInCart");
const viewCart = require("./controllers/viewCart");
const modifyProductPage = require("./controllers/modifyProductPage");
const adminPostAllProducts = require("./controllers/adminPostAllProducts");
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

app.route("/admin").get(adminGetAllProducts);
app.route("/admin").post(adminPostAllProducts);

app.get("/postSignup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/postSignup.html");
})


app.get("/login", (request, response)=>{
    if(request.session.isLoggedIn){
        response.redirect("/");
    }
    response.sendFile(__dirname+"/public/html/login.html");
}).post("/login", postLogin);

app.get("/signup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/signup.html");
})
app.post("/signup", upload.single("profile"), postUserSignup);

app.get("/logout", logoutUser);

app.post("/modifyProductPage", modifyProductPage);

app.post("/modifyProduct", modifyProduct);

app.get("/addProduct", (request, response)=>{
    response.sendFile(__dirname+"/public/html/addProduct.html");
})

app.post("/addProduct", upload.single("productImage"), addProduct);

app.post("/deleteProduct", deleteProduct);

app.route("/getAllProducts").get(getAllProducts);

app.get("/verify", verifyUser);

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

app.post("/addProductToCart", addProductToCart);

app.post("/removeProductFromCart", removeProductFromCart);

app.post("/incrementInCart", incrementInCart);

app.post("/decrementInCart", decrementInCart);



app.get("/viewCart", viewCart);


app.listen(3000, ()=>{
    console.log("Server Ready!");
})