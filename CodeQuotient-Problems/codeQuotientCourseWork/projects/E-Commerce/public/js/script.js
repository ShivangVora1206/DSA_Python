var mainDiv = document.querySelector("#main");
var mainPopDiv = document.querySelector("#main-pop-div");
var loadMore = document.querySelector("#load-more")
var productDetailsButtons = document.querySelectorAll(".product-img")
var count = 5;

productDetailsButtons.forEach((button)=>{
    console.log(button.name);
    button.addEventListener("click", ()=>{
        // console.log(event);
        var popDiv = document.createElement("div");
        var popSubDiv = document.createElement("div");
        var cancelDiv = document.createElement("div");
        var cancelButton = document.createElement("button");
        var productDescription = document.createElement("p");
    
        cancelDiv.className = "cancel-button";
        cancelButton.className = "cancel-button";
        popDiv.className = "pop-div";
        popSubDiv.className = "pop-sub-div";
        cancelButton.innerHTML = "X";
        cancelButton.id = "cancel-button";
        productDescription.innerHTML = button.name;
    
        mainPopDiv.appendChild(popDiv);
        cancelDiv.appendChild(cancelButton);
        popDiv.appendChild(cancelDiv);
        popDiv.appendChild(productDescription);
        
        cancelButton.addEventListener("click", ()=>{
            mainPopDiv.removeChild(popDiv);
        })
    })
})

// loadMore.addEventListener("click", ()=>{
//     let temp = count;
//     count += 5;
//     let nextFive = products.slice(temp, count);
//     console.log(nextFive);
    
//     nextFive.forEach((product)=>{
//         createProductsDom(product);
//     });
    
// })

// productDetailsButton.addEventListener("click", (event)=>{
//     console.log(event);
//     var popDiv = document.createElement("div");
//     var popSubDiv = document.createElement("div");
//     var cancelDiv = document.createElement("div");
//     var cancelButton = document.createElement("button");
//     var TitleHeading = document.createElement("p");
//     var popProductImage = document.createElement("img");

//     cancelDiv.className = "cancel-button";
//     TitleHeading.className = "pop-title-heading";
//     TitleHeading.innerHTML = product.productName;
//     popProductImage.src = product.productImage;
//     popProductImage.className = "pop-img";
//     cancelButton.className = "cancel-button";
//     popDiv.className = "pop-div";
//     popSubDiv.className = "pop-sub-div";
//     cancelButton.innerHTML = "X";
//     cancelButton.id = "cancel-button";

//     mainPopDiv.appendChild(popDiv);
//     cancelDiv.appendChild(cancelButton);
//     popDiv.appendChild(cancelDiv);
//     popDiv.appendChild(TitleHeading);
//     // popDiv.appendChild(popProductImage);
//     popDiv.appendChild(pop-ProductImage);//intentional
//     popDiv.appendChild(productDesc);
    
//     cancelButton.addEventListener("click", ()=>{
//         mainPopDiv.removeChild(popDiv);
//     })
// })