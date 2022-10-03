const login = document.getElementById('login');
var token = localStorage.getItem('token');
let restId = sessionStorage.getItem('restId');
const restaurantDetails = document.getElementById('restaurant-details');
const menuDetailsSection = document.getElementById('menu-details-section');
const menuImagesSection = document.getElementById('menu-images-section');
fetchSingleRestaurant();
fetchALlMenu();

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
	window.location.href = '/pages/login.html';
}

function logoutUser() {
	localStorage.removeItem('token');
	window.location.reload();
}

function fetchALlMenu() {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://foodbukka.herokuapp.com/api/v1/menu');
	request.send();

	request.addEventListener('load', function () {
		if (request.status == 200) {
			showAllMenu(JSON.parse(request.responseText));
		} else {
			alert('something went wrong');
		}
	});
}

function fetchSingleRestaurant() {
	let request = new XMLHttpRequest();
	request.open(
		'GET',
		`https://foodbukka.herokuapp.com/api/v1/restaurant/${restId}`
	);
	request.send();

	request.addEventListener('load', function () {
		if (request.status == 200) {
			showRestaurant(JSON.parse(request.responseText));
		} else {
			alert('something went wrong');
		}
	});
}

function showAllMenu(data) {
	let id = sessionStorage.getItem('i');
	// console.log(data.Result[id]);
	let element = document.createElement('div');
	element.classList.add('menu-details');

	element.innerHTML = `
        <h1>${data.Result[id].menuname}</h1>
        <p>${data.Result[id].description}</p>
    `;

	let images = document.createElement('div');
	images.classList.add('image-div');
	// console.log('Image : ', data.Result[id]);
	images.innerHTML = `
    <img src = ${data.Result[id].images[0]} alt="Image not found"/>
    <img src = ${data.Result[id].images[1]} alt="Image not found"/>
    <img src = ${data.Result[id].images[2]} alt="Image not found"/>
    `;
	menuImagesSection.appendChild(images);
	menuDetailsSection.appendChild(element);
	// console.log(data.Result[id]);
}

function showRestaurant(data) {
	// console.log('restaurant : ', data.data);
	let element = document.createElement('div');
	element.classList.add('row-restaurant-details');

	element.innerHTML = `

            <dl>
                <dt>Details: </dt>
                <dd>${data.data.businessname}</dd>
                <dd>${data.data.restauranttype}</dd>
                <dd>${data.data.address}</dd>
                <dd>${data.data.location}</dd>
            </dl>

            <dl>
            <dt>Facility: </dt>
                <dd>Average Cost : &#8377 ${data.data.averagecost}</dd>
                <dd>Parking : ${
									data.data.parkinglot ? 'Available' : 'Not available'
								}</dd>
                <dd>Reviews : ${data.data.reviews}</dd>
            </dl>
            <dl>
                <dt>Contact: </dt>
                <dd>${data.data.phone}</dd>
                <dd>${data.data.email}</dd>
            </dl>

    `;
	// console.log(element);
	// console.log(restaurantDetails);
	restaurantDetails.append(element);
}
