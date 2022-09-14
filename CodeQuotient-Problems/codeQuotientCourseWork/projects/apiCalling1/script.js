var request = new XMLHttpRequest();
var url = "https://foodbukka.heokuapp.com/api/v1/restaurant";
request.open("GET", url);
request.setRequestHeader("");//set request header
request.send();
request.addEventListener("load", function () {
    console.log("data recvd");
    console.log(request.responseText);
})
//lecture project link https://projects.codequotient.com/project/12-08-2022-3p34g825jjcl6qga83j