//project link https://projects.codequotient.com/project/compilecodeusingapi-3p34g82fr89l88mgz8o
var url = "https://codequotient.com/api/";
var codeText = document.querySelector("#code");
var compileButton = document.querySelector("#compilebutton");
var outputArea = document.querySelector("#output");
var dropdown = document.querySelector("#dropdown");


compileButton.addEventListener("click", function () {
    compileButton.innerHTML = "RUNNING";
    var request = new XMLHttpRequest();
    var data = {
        "code": codeText.value,
        langId: dropdown.value
    }

    request.open("POST", url + "executeCode");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.addEventListener("load", function () {
        // console.log(request.responseText);
        let response = JSON.parse(request.responseText);
        if (response.error !== undefined) {

            compileButton.innerHTML = "RUN";
            outputArea.innerHTML = "Please Write Some Code";

        }
        else {
            // console.log("code not null");
            var interval = setInterval(function () {
                var request2 = new XMLHttpRequest();

                request2.open("GET", url + "codeResult/" + response.codeId);
                request2.send();
                request2.addEventListener("load", function () {

                    let response2 = JSON.parse(request2.responseText);
                    let responseData = JSON.parse(response2.data);
                    if (responseData.status === undefined) {
                        clearInterval(interval);
                        // console.log(responseData);
                        compileButton.innerHTML = "RUN";
                        if (responseData.output === "") {
                            outputArea.innerText = responseData.errors;
                        } else {
                            outputArea.innerText = responseData.output;
                        }
                    }

                })
            }, 1000);


        }
    })


})


//https://codequotient.com/api/codeResult/${codeId}

