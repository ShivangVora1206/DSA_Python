var heading = document.getElementById("heading");
var elements = document.getElementsByTagName("button");
var button = document.getElementById("tadaaa");
var button2 = document.getElementById("abra")
var button3 = document.getElementById("choo")
var button4 = document.getElementById("sim")

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