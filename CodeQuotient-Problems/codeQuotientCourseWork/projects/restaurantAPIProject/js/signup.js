const usernameNode = document.getElementById('username');
const emailNode = document.getElementById('email');
const phoneNode = document.getElementById('phone');
const passwordNode = document.getElementById('password');
const signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click', setUserSignUp);
//fucntions
function setUserSignUp() {
	const isFormValid = validateForm([
		usernameNode.value,
		emailNode.value,
		phoneNode.value,
		passwordNode.value,
	]);

	if (!isFormValid) {
		alert('Fill in full details');
	}
	let username = usernameNode.value;
	let password = passwordNode.value;
	let email = emailNode.value;
	let phone = phoneNode.value;
	let spinner = `<div class="lds-facebook"><div></div><div></div><div></div></div>`;
	signUpBtn.toggleAttribute('disabled');
	signUpBtn.innerHTML = spinner;
	signUpUser(username, password, email, phone);
}
window.onload = function () {
	console.log(localStorage.getItem('token'));
	if (localStorage.getItem('token') !== null) {
		window.location.href = '/';
	}
};
function signUpUser(username, password, email, phone) {
	let request = new XMLHttpRequest();
	request.open('POST', 'https://foodbukka.herokuapp.com/api/v1/auth/register');
	request.setRequestHeader('content-type', 'application/json');

	let body = {
		username: username,
		password: password,
		email: email,
		phone: phone,
	};
	request.send(JSON.stringify(body));
	request.addEventListener('load', function () {
		console.log(request.status);
		const result = JSON.parse(request.responseText);
		if (request.status !== 200) {
			alert(request.responseText);
			signUpBtn.toggleAttribute('disabled');
			signUpBtn.innerHTML = 'Sign up';
		} else {
			signUpUserStorage(result);
		}
	});
}

function signUpUserStorage(data) {
	localStorage.setItem('token', data.token);
	window.location.href = '/';
}

function validateForm(data) {
	return data.every(function (value) {
		return value !== '';
	});
}
