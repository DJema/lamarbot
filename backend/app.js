// dependencies
const express = require('express');
const bodyParser = require('body-parser');

const wine = require('./routes/wine.route'); // Imports routes for the wines
const app = express();

// connect to db
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://ramidjema:ramidjema6@cluster0-ymxxx.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/wine', wine);

let port = 4000;

app.listen(port, () => {
    console.log('Server up and running on port numner ' + port);
});