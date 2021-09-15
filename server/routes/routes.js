const express = require('express');
const route = express.Router();
const controller = require('../../controller/controller');
const url = process.env.URL;
const axios = require('axios');
route.get('/', (req, res) => {
	axios
		.get(url)
		.then((data) => {
			res.render('index', { users: data.data });
			console.log(data);
		})
		.catch((e) => {
			console.log(e);
		});
});

route.get('/add', (re, res) => {
	res.render('add');
});

route.get('/edit/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	axios.get(url + '/' + id).then((data) => {
		console.log(data);
		res.render('edit', { data: data.data });
	});
});

route.post('/api/user', controller.create);
route.get('/api/user', controller.find);
route.get('/api/user/:id', controller.findone);
route.put('/api/user/:id', controller.update);
route.delete('/api/user/:id', controller.remove);

module.exports = route;
