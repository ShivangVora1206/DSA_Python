const login = document.getElementById('login');
const restaurants = document.getElementById('restaurants');
var token = localStorage.getItem('token');
let restaurantContainer = undefined;
console.log(restaurants);
fetchALlRestaurants();
login.addEventListener('click', handleLogin);
if (token) {
	login.innerText = 'Logout';
} else {
	login.innerText = 'Login';
}

//functions

function handleLogin(e) {
	e.preventDefault();
	if (token) {
		logoutUser();
		return;
	}
	window.location.href = '../html/login.html';
}

function logoutUser() {
	localStorage.removeItem('token');
	window.location.reload();
}

function fetchALlRestaurants() {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://foodbukka.herokuapp.com/api/v1/restaurant');
	request.send();

	request.addEventListener('load', function () {
		if (request.status == 200) {
			showAllResults(JSON.parse(request.responseText));
		} else {
			alert('something went wrong');
		}
	});
}

function showAllResults(data) {
	console.log(data);
	let i = 0;
	data.Result.forEach(function (restaurant) {
		let container = document.createElement('div');
		container.classList.add('restaurantContainer');
		container.setAttribute('id', restaurant.id);
		// container.addEventListener('click', getMenuPage);
		container.innerHTML = `
		<div class="head-restaurant" >
			<h3>${restaurant.businessname}</h3>
			<p>Cost : &#8377 ${restaurant.averagecost}</p>
		</div>
		<span class= "reviews">Reviews : ${restaurant.reviews}</span>
		<div class= "img">
		<img src = ${restaurant.image} class="rest-img" loading="lazy"/>
		</div>
		<div class= "foot-restaurant">
		<span class= "location"><span class = "location-text">${
			restaurant.location
		}</span></span>
		<a class="mail" href="mailto:${
			restaurant.email
		}">Email Us</a>
		</div>
		<a ><button class="menu" onClick = getMenuPage("${i++}","${
			restaurant.id
		}")>Checkout Menu</button></a>
		`;
		restaurants.appendChild(container);
		restaurantContainer = document.getElementById(restaurant.id);
	});
}

function getMenuPage(data, restData) {
	sessionStorage.setItem('i', data);
	sessionStorage.setItem('restId', restData);
	window.location.href = '../html/menu.html';
}
