//share link https://projects.codequotient.com/project/todoapp-3p34g82fr9el7rga0xx

var taskTable = document.querySelector("#tasktable")
var taskInput = document.querySelector("#taskinput")
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if(tasks){
    tasks.forEach(addTasks);
}

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
    var status = 0;
    if(typeof taskData === "string"){
        taskData = [taskData, status];
    }
    var newRow = document.createElement("tr");
    var newData = document.createElement("td");
    var newData2 = document.createElement("td");
    
    var taskCompleteButton = document.createElement("button");
    var taskDeleteButton = document.createElement("button");
    var taskUpdateButton = document.createElement("button");

    // taskCompleteButton.innerText = "Completed";
    // taskDeleteButton.innerText = "Delete";
    // taskUpdateButton.innerText = "Update";

    taskCompleteButton.className = "btn";
    taskDeleteButton.className = "btn";
    taskUpdateButton.className = "btn";

    taskCompleteButton.innerHTML = "<i class=\"fa fa-check\"></i>";
    taskDeleteButton.innerHTML = "<i class=\"fa fa-trash\"></i>";
    taskUpdateButton.innerHTML = "<i class=\"fa fa-gears\"></i>";

    

    newData.innerText = taskData[0];

    newData.classList.add("p");

    if(taskData[1] === 1){
        newData.style.textDecoration = "line-through";
    }

    if(identifier === "button"){
        tasks.push(taskData);
    }

    // newData.style.paddingRight = "100px";
    

    taskCompleteButton.addEventListener("click", function () {

        newData.style.textDecoration = "line-through";
        let index = tasks.indexOf(taskData);
        tasks[index][1] = 1;
        localStorage.setItem("tasks", JSON.stringify(tasks))
        
    })

    taskDeleteButton.addEventListener("click", function () {
        taskTable.removeChild(newRow);
        let index = tasks.indexOf(taskData);
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    taskUpdateButton.addEventListener("click", function () {
        var updateData = prompt("Change the task");
        newData.innerText = updateData;
        let index = tasks.indexOf(taskData);
        tasks[index][0] = updateData;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    newData2.appendChild(taskCompleteButton);
    newData2.appendChild(taskUpdateButton);
    newData2.appendChild(taskDeleteButton);
    newRow.appendChild(newData);
    newRow.appendChild(newData2);
    taskTable.appendChild(newRow);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    taskInput.value = "";
}