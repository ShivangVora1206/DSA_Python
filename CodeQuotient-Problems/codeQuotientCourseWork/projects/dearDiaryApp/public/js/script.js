var newButton = document.querySelector("#newbutton");
var mainDiv = document.querySelector("#main");
var entries = [];
var username = "";

getUserName();
getEntries();

function getUserName() {
    var req = new XMLHttpRequest();
    req.open("get", "http://127.0.0.1:3000/getUserName");
    req.send();
    req.addEventListener("load", ()=>{
        username = JSON.parse(req.responseText);
    })
}

function getEntries() {
    var req = new XMLHttpRequest();
    req.open("get", "http://127.0.0.1:3000/getEntries");
    req.send();
    req.addEventListener("load", ()=>{
        entries = JSON.parse(req.responseText);
        console.log(entries);
        entries.forEach((entry) => {
            createNewEntry(entry.author, entry.body, entry.date, entry.time);
        });
    })
    
}

function setEntries(entry){
    var req = new XMLHttpRequest();
    req.open("post", "http://127.0.0.1:3000/setEntries");
    req.setRequestHeader("Content-Type", "application/json");
    var data = {"entry":entry};
    console.log(data);
    req.send(JSON.stringify(data));
    req.addEventListener("load", ()=>{
        console.log("entries set");
    })
}

function deleteEntries(entry){
    var req = new XMLHttpRequest();
    req.open("post", "http://127.0.0.1:3000/deleteEntries");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(entry));
    req.addEventListener("load", ()=>{
        console.log("entries deleted");
    })
}

newButton.addEventListener("click", ()=>{
    var userInput = document.createElement("textarea");
    var submitButton = document.createElement("button");
    var popDiv = document.createElement("div");
    
    popDiv.className = "pop-div";
    submitButton.className = "submit-button";
    submitButton.innerText = "Submit";

    mainDiv.appendChild(popDiv);
    popDiv.appendChild(userInput);
    popDiv.appendChild(submitButton);

    submitButton.addEventListener("click", (e)=>{
        var currentDate = new Date();
        let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let date = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear()
        let entry = {"author":username, "body":userInput.value, "date":date, "time":time};
        
        console.log(entry);
        entries.push(entry);
        setEntries(entry);

        mainDiv.removeChild(popDiv);
        createNewEntry(username, userInput.value, date, time);
    })
})

function createNewEntry(author, entryText, date, time){
    var container = document.createElement("div");
    var title = document.createElement("h1");
    var subtitle = document.createElement("h2");
    var bodyText = document.createElement("p");
    var deleteButton = document.createElement("button");
    
    deleteButton.className = "delete-button";
    container.className = "card-div";
    bodyText.className = "body-text";
    title.innerText = date;
    subtitle.innerText = time;
    bodyText.innerText = entryText;
    deleteButton.innerHTML = "Delete Entry";

    deleteButton.addEventListener("click", ()=>{
        mainDiv.removeChild(container);
        let data = {"author":author,"body":entryText, "date":date, "time":time};
        deleteEntries(data);
    })
    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(bodyText);
    container.appendChild(deleteButton);
    mainDiv.appendChild(container);
}