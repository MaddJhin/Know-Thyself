const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const friends = require("../data/friends.json");

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Routing
// =========================================================================
router.get("/movies", function (req, res, next) {
    res.sendFile(path.resolve(__dirname, "../data/movies.json"));
});

router.post("/friends", function(req, res){
    var newFriend = req.body;
    friends.profiles.push(newFriend);
    fs.writeFile('./app/data/friends.json', JSON.stringify(friends, null, 2), function (error) {
        if(error) 
            throw error;
    });
});


module.exports = router;