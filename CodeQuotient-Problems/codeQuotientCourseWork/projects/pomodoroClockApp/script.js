var sessionTime = document.querySelector("#sessiontimerminutes");
var breakTime = document.querySelector("#breaktimerminutes");
var sessionTimePlusButton = document.querySelector("#sessiontimeplus")
var sessionTimeMinusButton = document.querySelector("#sessiontimeminus")
var breakTimePlusButton = document.querySelector("#breaktimeplus");
var breakTimeMinusButton = document.querySelector("#breaktimeminus");
var startButton = document.querySelector("#startbutton");
var resetButton = document.querySelector("#resetbutton");
var progressBox = document.querySelector("#progressbox");
var progressMinutes = document.querySelector("#progressminutes");
var progressSeconds = document.querySelector("#progressseconds")
var isStart = false;
var isPause = false;

let arr = [0, 0];

sessionTimePlusButton.addEventListener("click", incrementTimer);
breakTimePlusButton.addEventListener("click", incrementTimer);

sessionTimeMinusButton.addEventListener("click", decrementTimer);
breakTimeMinusButton.addEventListener("click", decrementTimer);

startButton.addEventListener("click", pomodoroLogic);
resetButton.addEventListener("click", pomodoroLogic);

function incrementTimer(event) {

    if(event.target.id === "sessiontimeplus"){
        let prevTime = parseInt(sessionTime.innerHTML);
        prevTime++;
        sessionTime.innerHTML = prevTime;  
    }

    if(event.target.id === "breaktimeplus"){
        let prevTime = parseInt(breakTime.innerHTML);
        prevTime++;
        breakTime.innerHTML = prevTime;  
    }

}

function decrementTimer(event) {

    if(event.target.id === "sessiontimeminus"){
        let prevTime = parseInt(sessionTime.innerHTML);
        if(prevTime === 0){
            return
        }
        prevTime--;
        sessionTime.innerHTML = prevTime;  
    }

    if(event.target.id === "breaktimeminus"){
        let prevTime = parseInt(breakTime.innerHTML);
        if(prevTime === 0){
            return
        }
        prevTime--;
        breakTime.innerHTML = prevTime;  
    }
}

function pomodoroLogic(event) {
    let sessionStartTime = parseInt(sessionTime.innerHTML);
    let breakStartTime = parseInt(breakTime.innerHTML);
    let isSessionOver = false;
    let sessionSeconds = sessionStartTime*60;
    let breakSeconds = breakStartTime*60;

    if(event.target.id === "resetbutton"){
        progressMinutes.innerHTML = "00";
        progressSeconds.innerHTML = "00";
        clearInterval(interval1);
        isStart = false;
        isPause = false;
        startButton.innerHTML = "Start";
        sessionTimeMinusButton.removeAttribute("disabled");
        sessionTimePlusButton.removeAttribute("disabled");
        breakTimeMinusButton.removeAttribute("disabled");
        breakTimePlusButton.removeAttribute("disabled");
        return
    }
    if(event.target.id === "startbutton" && isStart){
        isStart = false;
        isPause = true;
        startButton.innerHTML = "Start";
        console.log("is paused", sessionSeconds, breakSeconds, arr);
        clearInterval(interval1);
    }
    else{
        isStart = true;
        startButton.innerHTML = "Pause";
        interval1 = setInterval(progressDecrementer, 100);
    }
    if(isStart || isPause){
        sessionTimeMinusButton.setAttribute("disabled", "True");
        sessionTimePlusButton.setAttribute("disabled", "True");
        breakTimeMinusButton.setAttribute("disabled", "True");
        breakTimePlusButton.setAttribute("disabled", "True");
    }


    
    function progressDecrementer() {
        if(isPause){
            isPause = false;
            sessionSeconds = arr[0];
            breakSeconds = arr[1];
        }
        if(!isSessionOver){
            progressBox.classList.remove("bordercolororange");
            progressBox.classList.add("bordercolorblue");
            progressMinutes.classList.remove("bordercolororange");
            progressMinutes.classList.add("bordercolorblue");

            if(parseInt(sessionSeconds/60) < 10){

                progressMinutes.innerHTML = "0"+parseInt(sessionSeconds/60);
            }
            else{
                progressMinutes.innerHTML = parseInt(sessionSeconds/60);

            }
            if(parseInt(sessionSeconds%60) < 10){

                progressSeconds.innerHTML = "0"+parseInt(sessionSeconds%60);
            }
            else{
                progressSeconds.innerHTML = parseInt(sessionSeconds%60);

            }
            
            console.log(sessionSeconds, "in session");
            sessionSeconds--;
            arr[0] = sessionSeconds;
            if(sessionSeconds < 1){
                isSessionOver = true;
                sessionSeconds = sessionStartTime*60;
            }
        }
        if(isSessionOver){
            progressBox.classList.remove("bordercolorblue");
            progressBox.classList.add("bordercolororange");
            progressMinutes.classList.remove("bordercolorblue");
            progressMinutes.classList.add("bordercolororange");
            if(parseInt(breakSeconds/60) < 10){

                progressMinutes.innerHTML = "0"+parseInt(breakSeconds/60);
            }
            else{
                progressMinutes.innerHTML = parseInt(breakSeconds/60);

            }
            if(parseInt(breakSeconds%60) < 10){

                progressSeconds.innerHTML = "0"+parseInt(breakSeconds%60);
            }
            else{
                progressSeconds.innerHTML = parseInt(breakSeconds%60);

            }
            
            console.log(breakSeconds, "in break");
            breakSeconds--;
            arr[1] = breakSeconds;
            if(breakSeconds < 1){
                isSessionOver = false;
                breakSeconds = breakStartTime*60;
            }
        }
    }
}