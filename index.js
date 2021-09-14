require('dotenv').config('.env');
require('ejs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//routes path  = require('./server/routes/routes');

const app = express();
app.use(bodyParser({ extended: false }));
const cors = require('cors');
app.use(cors());
// app.use(express.json());

//ejs

app.set('view engine', 'ejs');
//assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//mongo
const connect = require('./server/database/connection');
connect();

const port = process.env.PORT || 3000;

app.use('/', require('./server/routes/routes'));

app.listen(port, function () {
	console.log('server started');
});
