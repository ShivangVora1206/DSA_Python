var wordDiv = document.getElementById("WORD");

var buttons = document.getElementsByTagName("button");

// var backspace = document.getElementById("backSpace");

var word = "";

var lastElement = null;

for(var i=0;i<buttons.length;i++){
    if (buttons[i].id === "backSpace"){
        buttons[i].addEventListener("click", backSpace);
    }
    else{
        buttons[i].addEventListener("click", typeLetters);
    }
}





function typeLetters(event) {
    if(lastElement){
        word = lastElement.innerText;
        wordDiv.removeChild(lastElement);
    }
    else{
        word = "";
    }
    
    var element = document.createElement("h2");
    word+=event.target.innerText;
    element.innerText = word;
    wordDiv.appendChild(element);
    lastElement = element;
    console.log(word);
    
}

function backSpace(){
    if(lastElement){
        word = lastElement.innerText;
        wordDiv.removeChild(lastElement);
    }
    else{
        word = "";
    }
    
    var element = document.createElement("h2");
    word = word.slice(0, word.length-1)
    element.innerText = word;
    wordDiv.appendChild(element);
    lastElement = element;
    console.log(word);
}

