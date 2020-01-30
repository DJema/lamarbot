// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// initialize express app
const app = express();

let port = 4000;

app.listen(port, () => {
    console.log('Server up and running on port numner ' + port);
});