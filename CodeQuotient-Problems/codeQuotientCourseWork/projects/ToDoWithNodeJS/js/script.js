var taskTable = document.querySelector("#tasktable")
var taskInput = document.querySelector("#taskinput")
var tasks = getAllTodosFromServer();

function getAllTodosFromServer(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:8000/readTodo");
    request.send();
    request.addEventListener("load", function (){
        todosFromServer = JSON.parse(request.responseText);
        todosFromServer.forEach(addTasks);
    });
}

// if(tasks){
//     tasks.forEach(addTasks);
// }

taskInput.addEventListener("keypress", function (event) {
    if(event.key == "Enter"){
        if (taskInput.value == ""){
            alert("Please enter a valid task");
            taskInput.classList.add("warning");
            return
        }

        taskInput.classList.remove("warning");
        addTasks(taskInput.value, "button");
        
    }
})


function addTasks(taskData, identifier){
    if (taskData === undefined){return}
    var status = 0;
    if(typeof taskData === "string"){
        taskData = {data : taskData, status : 0};
    }
    var newRow = document.createElement("tr");
    var newData = document.createElement("td");
    var newData2 = document.createElement("td");
    
    var taskCompleteButton = document.createElement("button");
    var taskDeleteButton = document.createElement("button");
    var taskUpdateButton = document.createElement("button");

    taskCompleteButton.className = "btn";
    taskDeleteButton.className = "btn";
    taskUpdateButton.className = "btn";

    taskCompleteButton.innerHTML = "<i class=\"fa fa-check\"></i>";
    taskDeleteButton.innerHTML = "<i class=\"fa fa-trash\"></i>";
    taskUpdateButton.innerHTML = "<i class=\"fa fa-gears\"></i>";

    

    newData.innerText = taskData.data;

    newData.classList.add("p");

    if(taskData.status === 1){
        newData.style.textDecoration = "line-through";
    }

    if(identifier === "button"){
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:8000/newTodo");
        let postData = {"task" : taskData};
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
        // tasks.push(taskData);
    }

    // newData.style.paddingRight = "100px";
    

    taskCompleteButton.addEventListener("click", function () {

        newData.style.textDecoration = "line-through";
        //api call to update todo state
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:8000/updateTodoState");
        let postData = {"task" : taskData};
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
        // let index = tasks.indexOf(taskData);
        // tasks[index][1] = 1;
        // localStorage.setItem("tasks", JSON.stringify(tasks))
        
    })

    taskDeleteButton.addEventListener("click", function () {
        taskTable.removeChild(newRow);
        //api call to delete todo event
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:8000/deleteTodo");
        let postData = {"task" : taskData};
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
        // let index = tasks.indexOf(taskData);
        // tasks.splice(index, 1);
        // localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    taskUpdateButton.addEventListener("click", function () {
        var updateData = prompt("Change the task");
        newData.innerText = updateData;
        //api call to update todo value
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:8000/updateTodoValue");
        let postData = {oldTask : taskData, newTask : updateData};
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
        // let index = tasks.indexOf(taskData);
        // tasks[index][0] = updateData;
        // localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    newData2.appendChild(taskCompleteButton);
    newData2.appendChild(taskUpdateButton);
    newData2.appendChild(taskDeleteButton);
    newRow.appendChild(newData);
    newRow.appendChild(newData2);
    taskTable.appendChild(newRow);
    // localStorage.setItem("tasks", JSON.stringify(tasks))
    taskInput.value = "";
}