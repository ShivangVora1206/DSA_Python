var taskTable = document.querySelector("#tasktable")
var taskInput = document.querySelector("#taskinput")
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if(tasks){
    tasks.forEach(addTasks);
}

taskInput.addEventListener("keypress", function (event) {
    if(event.key == "Enter"){
        console.log("Enter on input area");
        if (taskInput.value == ""){
            taskInput.classList.add("warning");
            return
        }

        taskInput.classList.remove("warning");
        addTasks(taskInput.value);
        
    }
})


function addTasks(taskData, identifier){
    var status = 0;
    var newRow = document.createElement("tr");
    var newData = document.createElement("td");
    var newData2 = document.createElement("td");
    // var newData3 = document.createElement("td");
    var taskCompleteButton = document.createElement("button");
    var taskDeleteButton = document.createElement("button");

    taskCompleteButton.innerText = "Completed";
    taskDeleteButton.innerText = "Delete";
    

    if(identifier == undefined){
        newData.innerText = taskData;
    }else{

        newData.innerText = taskData[0];
    }
    if(taskData[1] == 1){
        newData.style.textDecoration = "line-through";
    }
    if(identifier == undefined){
        
        tasks.push([taskData, status]);
    }

    newData.style.paddingRight = "100px";
    

    taskCompleteButton.addEventListener("click", function () {

        newData.style.textDecoration = "line-through";
        index = tasks.indexOf(taskData);
        tasks[index][1] = 1;
        localStorage.setItem("tasks", JSON.stringify(tasks))
        
    })

    taskDeleteButton.addEventListener("click", function () {
        taskTable.removeChild(newRow);
        index = tasks.indexOf(taskData);
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    newData2.appendChild(taskCompleteButton);
    newData2.appendChild(taskDeleteButton);
    // newData3.appendChild(taskDeleteButton);
    newRow.appendChild(newData);
    newRow.appendChild(newData2);
    // newRow.appendChild(newData3);
    taskTable.appendChild(newRow);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    taskInput.value = "";
}