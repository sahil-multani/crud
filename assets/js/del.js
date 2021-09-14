let ele = document.querySelectorAll('.delete');
let url = 'http://localhost:5000/api/user';
for (let e of ele) {
	let id = e.getAttribute('data-id');
	url = url + '/' + id.toString();
	console.log(id);
	e.addEventListener('click', function () {
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				window.location = '/';
			})
			.catch((e) => {
				console.log(e);
			});
	});
}
