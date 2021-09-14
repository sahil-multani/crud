const mongoose = require('mongoose');

const connect = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO);
		console.log('mongo connected');
	} catch (error) {
		console.log('mongo db connection error !', error);
		process.exit(1);
	}
};
module.exports = connect;
