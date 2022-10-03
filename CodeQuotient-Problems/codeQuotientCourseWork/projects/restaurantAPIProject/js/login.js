const usernameNode = document.getElementById('username');
const passwordNode = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', getUserLogin);
//fucntions
function getUserLogin() {
	let username = usernameNode.value;
	let password = passwordNode.value;
	let spinner = `<div class="lds-facebook"><div></div><div></div><div></div></div>`;
	loginBtn.toggleAttribute('disabled');
	loginBtn.innerHTML = spinner;
	loginUser(username, password);
}
window.onload = function () {
	console.log(localStorage.getItem('token'));
	if (localStorage.getItem('token') !== null) {
		console.log('main run hogaya');
		window.location.href = '/';
	}
};

function loginUser(username, password) {
	let request = new XMLHttpRequest();
	request.open('POST', 'https://foodbukka.herokuapp.com/api/v1/auth/login');
	request.setRequestHeader('content-type', 'application/json');
	console.log('username : ' + username + 'password : ' + password);
	let body = {
		username: username,
		password: password,
	};
	request.send(JSON.stringify(body));

	request.addEventListener('load', function () {
		const result = JSON.parse(request.responseText);
		console.log(result);
		if (request.status !== 200) {
			alert(request.responseText);
			loginBtn.toggleAttribute('disabled');
			loginBtn.innerText = 'Login';
		} else {
			loginUserStorage(result);
		}
	});
}

function loginUserStorage(data) {
	console.log(data.token);
	localStorage.setItem('token', data.token);
	window.location.href = '/';
}
