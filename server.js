// Dependencies
// ==========================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// Express App
// ==========================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

// Tell Server to Listen
// ==========================
app.listen(PORT, function() {
    console.log("App Listening on PORT: " + PORT);
});