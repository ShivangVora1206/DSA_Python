//apis
//example any function that you haven't written is an api
//ajax is a way to get data from server to browser without having to reload the page
//two ways to implement ajax in js xml http requests and fetch

var request = new XMLHttpRequest();
var url = "https://foodbukka.heokuapp.com/api/v1/restaurant";
request.open("GET", url);
request.send();
request.addEventListener("load", function () {
    console.log("data recvd");
    console.log(request.responseText);
})