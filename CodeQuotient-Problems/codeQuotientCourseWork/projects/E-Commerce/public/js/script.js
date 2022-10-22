var mainDiv = document.querySelector("#main");
var mainPopDiv = document.querySelector("#main-pop-div");
var loadMore = document.querySelector("#load-more")
var count = 5;
let products = [];


request = new XMLHttpRequest();
request.open("get", "http://127.0.0.1:3000/getProducts");
request.send();
request.addEventListener("load", ()=>{
    console.log(request);
    products = JSON.parse(request.responseText);
    let firstFive = products.slice(0, count);
    console.log(firstFive);
    
    firstFive.forEach((product)=>{
        createProductsDom(product);
    });
})




loadMore.addEventListener("click", ()=>{
    let temp = count;
    count += 5;
    let nextFive = products.slice(temp, count);
    console.log(nextFive);
    
    nextFive.forEach((product)=>{
        createProductsDom(product);
    });
    
})


function createProductsDom(product) {
    console.log(product);
    let card = document.createElement("div");
    let cardProductName = document.createElement("div");
    let cardProductImage = document.createElement("div");
    let cardProductDetails = document.createElement("div");
    let productDetailsButton = document.createElement("button");
    let productImage = document.createElement("img");
    let productName = document.createElement("p");
    let productPrice = document.createElement("p");
    let productDesc = document.createElement("p");

    productDetailsButton.className = "btn";
    productImage.className = "product-img";
    card.className = "card";
    cardProductName.className = "card-product-name";
    cardProductImage.className = "card-product-image";
    cardProductDetails.className = "card-product-details-btn";
    productDetailsButton.innerHTML = "Details";
    productImage.src = product.productImage;
    productName.innerHTML = product.productName;
    productPrice.innerHTML = product.productPrice;
    productDesc.innerHTML = product.productDescription;

    productDetailsButton.addEventListener("click", ()=>{
        var popDiv = document.createElement("div");
        var popSubDiv = document.createElement("div");
        var cancelDiv = document.createElement("div");
        var cancelButton = document.createElement("button");
        var TitleHeading = document.createElement("p");
        var popProductImage = document.createElement("img");
    
        cancelDiv.className = "cancel-button";
        TitleHeading.className = "pop-title-heading";
        TitleHeading.innerHTML = product.productName;
        popProductImage.src = product.productImage;
        popProductImage.className = "pop-img";
        cancelButton.className = "cancel-button";
        popDiv.className = "pop-div";
        popSubDiv.className = "pop-sub-div";
        cancelButton.innerHTML = "X";
        cancelButton.id = "cancel-button";
    
        mainPopDiv.appendChild(popDiv);
        cancelDiv.appendChild(cancelButton);
        popDiv.appendChild(cancelDiv);
        popDiv.appendChild(TitleHeading);
        // popDiv.appendChild(popProductImage);
        popDiv.appendChild(pop-ProductImage);//intentional
        popDiv.appendChild(productDesc);
        
        cancelButton.addEventListener("click", ()=>{
            mainPopDiv.removeChild(popDiv);
        })
    })
    cardProductName.appendChild(productName);
    cardProductDetails.appendChild(productDetailsButton);
    cardProductImage.appendChild(productImage);
    card.appendChild(cardProductName);
    card.appendChild(cardProductImage);
    card.appendChild(productPrice);
    card.appendChild(cardProductDetails);
    mainDiv.appendChild(card);
}