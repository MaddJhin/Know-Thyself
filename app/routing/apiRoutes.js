const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// const path = require('path');
// const fs = require('fs');
// const friends = require("../data/friends.json");

const genres = require("../data/movies.json");
 
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Routing
// =========================================================================
// router.get("/friends", function (req, res, next) {
    // friends.profiles.push(newFriend);
    // fs.writeFile('./app/data/movies.json', JSON.stringify(friends, null, 2), function (error) {
    //     if(error) 
    //         throw error;
    // });
    // res.sendFile(path.resolve(__dirname, "../data/friends.json"));
// });

router.post("/movies", function(req, res){

    
    console.log(userPref);
});


module.exports = router;