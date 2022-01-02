const express = require('express');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');

const app = express();

//middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(fileupload());

fs.readdirSync('./routes').map((r) => app.use('/', require(`./routes/${r}`)));

//mongoose

mongoose
	.connect(
		'mongodb+srv://saadwaheed:blahblah1235@cluster0.7ytqb.mongodb.net/tcsclassproject?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected to database');
	})
	.catch((err) => {
		console.log('Error connecting to database :', err);
	});

//port

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
