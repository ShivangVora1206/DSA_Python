var request = new XMLHttpRequest();
var url = "https://meowfacts.herokuapp.com/";
request.open("GET", url);
//request.setRequestHeader("");//set request header
request.send();
request.addEventListener("load", function () {
    console.log("data recvd");
    console.log(request.responseText);
    var data = JSON.parse(request.responseText);
    console.log(data);
    
})
//lecture project link https://projects.codequotient.com/project/12-08-2022-3p34g825jjcl6qga83j