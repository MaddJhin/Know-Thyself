// Dependencies
// ==========================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');


// Express App
// ==========================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Tell Server to Listen
// ==========================
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});