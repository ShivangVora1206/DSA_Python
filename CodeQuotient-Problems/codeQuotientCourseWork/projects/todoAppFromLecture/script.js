var button = document.querySelector("#addTaskButton");
var input = document.querySelector("#userinput");
var output = document.querySelector("#output");
var array = [];
var todos = localStorage.getItem("todos");
todos = JSON.parse(todos);



button.addEventListener("click", function (){

    console.log(input.value);

    if(!input.value){

        input.classList.add("warning");

        return
    }

    input.classList.remove("warning");

    var listItem = document.createElement("div");
    var listText = document.createElement("p");
    var deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function (event) {

        output.removeChild(listItem);

    })

    listItem.setAttribute("class", "todoContainer");//removes previous styling and overwrites it
    //listItem.className.add("todoContainer");//adds to the previously defined style instead of overwriting it
    
    listText.innerText = input.value;

    array.push(input.value);

    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);

    output.appendChild(listItem);

    localStorage.setItem("todos", JSON.stringify(array));

    input.value = "";

})

