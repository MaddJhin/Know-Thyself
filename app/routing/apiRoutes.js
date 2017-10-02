const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');

const fs = require('fs');
const friends = require("../data/friends.json");

const genres = require("../data/movies.json");
 
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Routing
// =========================================================================
router.get("/friends", function (req, res, next) {
    res.sendFile(path.resolve(__dirname, "../data/friends.json"));
});

router.post("/friends/add", function (req, res, next) {
    var newFriend = req.body;
    friends.profiles.push(newFriend);
    fs.writeFile('./app/data/friends.json', JSON.stringify(friends, null, 2), function (error) {
        if(error) 
            throw error;
    });
});

router.post("/movies", function(req, res){
    var userPref = req.body.preferences;
    var movies = genres.movies;

    var score = 100;
	var lowestIndex = 0;
	for (var i = 0; i < movies.length; i++){
		var genreScore = 0;
		for (var x = 0; x < movies[i].preferences.length; x++){
			var difference = Math.abs(userPref[x] - movies[i].preferences[x]);
            genreScore += parseInt(difference);
		}
		if(genreScore < score) {
			lowestIndex = i;
			score = genreScore;
		}	
	}
    console.log(movies[lowestIndex]);
    return res.json(movies[lowestIndex]);
});

router.get("/movies/list", function(req, res){
    res.sendFile(path.resolve(__dirname, "../data/movies.json"));
});


module.exports = router;