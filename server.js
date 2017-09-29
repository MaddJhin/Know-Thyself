// Dependencies
// ==========================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes');

// Express App
// ==========================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use('/', htmlRoutes);

// Tell Server to Listen
// ==========================
app.listen(PORT, function() {
    console.log(path.join(__dirname, "public/home.html"));
});