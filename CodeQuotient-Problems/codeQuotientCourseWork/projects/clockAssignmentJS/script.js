
var button = document.querySelector("#button");
var myInterval = setInterval(secondChanger, 1000);

var hh = 0;
var mm = 0;
var ss = 0;

function secondChanger() {
    var hours = document.querySelector("#hours");
    var minutes = document.querySelector("#minutes");
    var seconds = document.querySelector("#seconds");
    ss++;
    if(ss < 10){
        seconds.innerHTML = `0${ss}`;
    }
    if(ss >= 10 && ss < 60){
        seconds.innerHTML = `${ss}`;
    }
    if(ss >= 60){
        ss = 0;
        mm++;
        seconds.innerHTML = `0${ss}`;
        minutes.innerHTML = `0${mm}`;
    }
    if(mm < 10){
        minutes.innerHTML = `0${mm}`;
    }
    if(mm >= 10 && mm < 60){
        minutes.innerHTML = `${mm}`;
    }
    if(mm >= 60){
        mm = 0;
        hh++;
        minutes.innerHTML = `0${mm}`;
        hours.innerHTML = `0${hh}`;
    }
    if(hh > 24){
        clearInterval(myInterval);
    }
}


button.addEventListener("click", function () {
    clearInterval(myInterval);
})