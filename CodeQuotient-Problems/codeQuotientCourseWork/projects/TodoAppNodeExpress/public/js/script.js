var taskTable = document.querySelector("#tasktable");
var taskInput = document.querySelector("#taskinput");
var userNameVar = document.querySelector("#userNameVar");
var tasks = getAllTodosFromServer();

function getUserName() {
    let req = new XMLHttpRequest();
    req.open("get", "http://127.0.0.1:3000/getusername");
    req.send();
    req.addEventListener("load", ()=>{
        console.log("uname", req.responseText);
        userNameVar.innerHTML = req.responseText;
    })
}

getUserName();

function getAllTodosFromServer(){
    // getUserName();
    let request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:3000/readTodo");
    request.send();
    request.addEventListener("load", function (){
        todosFromServer = JSON.parse(request.responseText);
        console.log(todosFromServer);
        todosFromServer.forEach(addTasks);
    });
}

function createTaskId(data){
    let temp = String(data);
    let sum = "";
    for(let i=0;i<temp.length;i++){
        sum += temp.charCodeAt(i);
    }
    console.log(sum);
    return String(parseInt(parseInt(sum)/3.14)).slice(0, 6);
}

taskInput.addEventListener("keypress", function (event) {
    if(event.key == "Enter"){
        if (taskInput.value == ""){
            alert("Please enter a valid task");
            taskInput.classList.add("warning");
            return
        }

        taskInput.classList.remove("warning");
        addTasks({
                    "task":{
                            "data":taskInput.value, "status":0
                            },
                    "taskId":createTaskId(taskInput.value)
                }, "button");
        
    }
})


function addTasks(taskData, identifier){
    if (taskData === undefined){return}

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

    
    newData.innerText = taskData.task.data;

    newData.classList.add("p");

    if(taskData.task.status === 1){
        newData.style.textDecoration = "line-through";
    }

    if(identifier === "button"){
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:3000/addTodo");
        let postData = taskData;
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
    }

    taskCompleteButton.addEventListener("click", function () {

        newData.style.textDecoration = "line-through";
        //api call to update todo state
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:3000/updateTodoState");
        let postData = taskData;
        postData.task.status = 1;
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));        
    })

    taskDeleteButton.addEventListener("click", function () {
        taskTable.removeChild(newRow);
        //api call to delete todo event
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:3000/deleteTodo");
        let postData = taskData;
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
    })

    taskUpdateButton.addEventListener("click", function () {
        var updateData = prompt("Change the task");
        newData.innerText = updateData;
        //api call to update todo value
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:3000/updateTodoValue");
        let postData = {oldTask : taskData, newTask : updateData};
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(postData));
    })

    newData2.appendChild(taskCompleteButton);
    newData2.appendChild(taskUpdateButton);
    newData2.appendChild(taskDeleteButton);
    newRow.appendChild(newData);
    newRow.appendChild(newData2);
    taskTable.appendChild(newRow);
    taskInput.value = "";
}