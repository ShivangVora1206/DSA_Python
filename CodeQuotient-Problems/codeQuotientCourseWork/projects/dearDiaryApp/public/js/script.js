var newButton = document.querySelector("#newbutton");
var mainDiv = document.querySelector("#main");
var logoutButton = document.querySelector("#logoutbutton");
var entries = [];
var username = "";
var apiurl = "http://127.0.0.1:3000"


getUserName();
getEntries();


function getUserName() {
    var req = new XMLHttpRequest();
    req.open("get", apiurl+"/getUserName");
    req.send();
    req.addEventListener("load", ()=>{
        username = JSON.parse(req.responseText);
        var Title = document.createElement("title");
        Title.innerHTML = "NoxLog | "+username;
        document.head.appendChild(Title);
    })
}

function getEntries() {
    var req = new XMLHttpRequest();
    req.open("get", apiurl+"/getEntries");
    req.send();
    req.addEventListener("load", ()=>{
        entries = JSON.parse(req.responseText);
        console.log(entries);
        entries.forEach((entry) => {
            createNewEntry(entry.author, entry.title, entry.body, entry.date, entry.time);
        });
    })
    
}

function setEntries(entry){
    var req = new XMLHttpRequest();
    req.open("post", apiurl+"/setEntries");
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
    req.open("post", apiurl+"/deleteEntries");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(entry));
    req.addEventListener("load", ()=>{
        console.log("entries deleted");
    })
}


logoutButton.addEventListener("click", ()=>{
    let req = new XMLHttpRequest();
    req.open("post", apiurl+"/logout");
    req.send();
    req.addEventListener("load", ()=>{
        console.log("logged out");
    })
})

newButton.addEventListener("click", ()=>{
    var userInput = document.createElement("textarea");
    var submitButton = document.createElement("button");
    var popDiv = document.createElement("div");
    var popSubDiv = document.createElement("div");
    var cancelDiv = document.createElement("div");
    var cancelButton = document.createElement("button");
    var title = document.createElement("input");
    var TitleHeading = document.createElement("p");

    cancelDiv.className = "cancel-button";
    TitleHeading.className = "pop-title-heading";
    TitleHeading.innerHTML = "New Entry";
    cancelButton.className = "cancel-button";
    popDiv.className = "pop-div";
    popSubDiv.className = "pop-sub-div";
    submitButton.className = "submit-button";
    submitButton.innerText = "Submit";
    cancelButton.innerHTML = "X";
    cancelButton.id = "cancel-button";
    title.className = "title-input";
    title.placeholder = "Title";
    userInput.className = "body-input";
    userInput.placeholder = "What's on your mind?"

    mainDiv.appendChild(popDiv);
    cancelDiv.appendChild(cancelButton);
    popSubDiv.appendChild(cancelDiv);
    popSubDiv.appendChild(TitleHeading);
    popSubDiv.appendChild(title);
    popSubDiv.appendChild(userInput);
    popDiv.appendChild(popSubDiv);
    popDiv.appendChild(submitButton);

    cancelButton.addEventListener("click", ()=>{
        mainDiv.removeChild(popDiv);
    })

    submitButton.addEventListener("click", (e)=>{
        var currentDate = new Date();
        let time = (12+(currentDate.getHours()%12)) + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let date = currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear()
        let entry = {"author":username,"title":title.value, "body":userInput.value, "date":date, "time":time};
        
        console.log(entry);
        entries.push(entry);
        setEntries(entry);

        mainDiv.removeChild(popDiv);
        createNewEntry(username, title.value, userInput.value, date, time);
    })
})

function createNewEntry(author, title, entryText, date, time){
    var container = document.createElement("div");
    var Title = document.createElement("h1");
    var subtitle = document.createElement("h3");
    var bodyText = document.createElement("h2");
    var deleteButton = document.createElement("button");


    deleteButton.className = "delete-button";
    container.className = "card-div";
    bodyText.className = "body-text";
    Title.innerText = title;
    subtitle.innerText = date+" "+time;
    bodyText.innerText = entryText;
    deleteButton.innerHTML = "Remove Page";
    
    deleteButton.addEventListener("click", ()=>{
        mainDiv.removeChild(container);
        let data = {"author":author, "title":title, "body":entryText, "date":date, "time":time};
        deleteEntries(data);
    })
    
    if(entryText.length > 40){
        bodyText.innerText = entryText.slice(0, 40)+"...";
        var expandButton = document.createElement("button");
        var expanded = false;
        expandButton.className = "delete-button";
        expandButton.innerHTML = "Read Full Page";        
        expandButton.addEventListener("click", ()=>{
            if(!expanded){
                expandButton.innerHTML = "Fold Page";        
                bodyText.innerText = entryText;
                expanded = true;
            }else{
                    expandButton.innerHTML = "Read Full Page";        
                    bodyText.innerText = entryText.slice(0, 40)+"...";
                    expanded = false;
                }
                    
        })
        container.appendChild(Title);
        container.appendChild(subtitle);
        container.appendChild(bodyText);
        container.appendChild(expandButton);
        container.appendChild(deleteButton);
        mainDiv.appendChild(container);
    }else{
        
        container.appendChild(Title);
        container.appendChild(subtitle);
        container.appendChild(bodyText);
        container.appendChild(deleteButton);
        mainDiv.appendChild(container);
    }
}