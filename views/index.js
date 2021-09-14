const { default: axios } = require('axios');
console.log('ejs scritp');
const axios = require(axios);
const form = document.getElementById('update_user');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('form');
});
