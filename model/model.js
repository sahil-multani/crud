const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	gender: String,
	status: String,
});

module.exports = mongoose.model('employee', schema);
