let url = process.env.URL;
let arr = {};
let id = window.location.pathname;
id = id.replace('/edit/', '');
console.log(id);
const form = document.getElementById('update_user');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	let data = new FormData(form);

	for (let [key, value] of data) {
		arr[key] = value;
		console.log(arr);
	}
	url = url + '/' + id.toString();
	console.log(url);
	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(arr),
	})
		.then((res) => {
			window.location = '/';
		})
		.catch((e) => {
			console.log(e);
		});
});
