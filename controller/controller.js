const mongoose = require('mongoose');
const schema = require('../model/model');

const create = (req, res) => {
	console.log(req.body);
	if (!req.body)
		return res.status(400).send({ message: 'form need to be filled' });
	// new
	const { name, email, gender, status } = req.body;
	const User = new schema({
		name,
		email,
		gender,
		status,
	});
	User.save()
		.then((doc) => {
			console.log(doc);
			res.redirect('/');
		})
		.catch((e) => {
			res.status(500).send({ message: '' || 'error while creating ' });
		});
};
const find = (req, res) => {
	schema.find({}, (err, doc) => {
		res.send(doc);
	});
};
const findone = (req, res) => {
	try {
		const { id } = req.params;
		schema
			.findById(id)
			.then((doc) => res.send(doc))
			.catch((e) => console.log(e));
	} catch (e) {
		console.log(e);
	}
};
const update = (req, res) => {
	const { id } = req.params;
	schema.findByIdAndUpdate(id, req.body, (err, doc) => {
		res.send(doc);
	});
};
const remove = (req, res) => {
	const { id } = req.params;
	console.log(id);
	schema
		.findByIdAndDelete(id)
		.then((data) => res.send({ message: 'user deleted' }));
};

module.exports = { create, find, findone, update, remove };
