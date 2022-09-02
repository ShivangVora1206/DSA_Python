//spellcheck
// original sir's project link https://projects.codequotient.com/project/12-08-2022-3p34g825jjcl6qga83j
var heading = document.getElementById("heading");
var elements = document.getElementsByTagName("button");
var button = document.getElementById("tadaaa");
var button2 = document.getElementById("abra");
var button3 = document.getElementById("choo");
var button4 = document.getElementById("sim");
var div = document.getElementById("parent");
var lastElement = null;
console.log(elements);
console.log(button);

button.addEventListener("click", function () {
    console.log("tadaa clicked");
    heading.style.backgroundColor = "red";
})


button2.addEventListener("click", function () {
    heading.style.backgroundColor = "white";
    heading.style.color = "black";
    heading.innerText = "its h4";
})


button3.addEventListener("click", function () {
    heading.style.color = "blue";
})


button4.addEventListener("click", function () {
    heading.innerText = "button 4 pressed!";
})

button4.addEventListener("mouseover", function () {
    heading.innerText = "mouse over button 4";
})

for (var i=0;i<elements.length;i++){
    var but = elements[i]
    but.addEventListener("click", fun)
}

function fun(event){
    console.log("target", event.target);
    var element = document.createElement("button");//redundant
    var element = document.createElement("h1");
    element.innerHTML = event.target.innerText;
    if (lastElement){
        div.removeChild(lastElement);
    }
    div.appendChild(element);
    lastElement = element;
}