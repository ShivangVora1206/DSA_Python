var request = new XMLHttpRequest();
var url = "https://foodbukka.heokuapp.com/api/v1/restaurant";
request.open("GET", url);
request.send();
request.addEventListener("load", function () {
    console.log("data recvd");
    console.log(request.responseText);
})