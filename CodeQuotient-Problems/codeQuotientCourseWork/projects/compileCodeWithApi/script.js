var request = new XMLHttpRequest();
var url = "";
request.open("POST", "https://codequotient.com/api/executeCode");
var data = {
    "code":"print(\"hello\")",
    langId:"0"
}
request.setRequestHeader("Content-Type","application/json");
request.send(JSON.stringify(data));

request.addEventListener("load", function () {
    console.log("data received");
    console.log(request.responseText);
})
