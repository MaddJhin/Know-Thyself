const express = require('express');
const router = express.Router();
const path = require('path');


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Routing
// ==========================
router.get("/", function (req, res, next) {
    res.sendFile(path.resolve(__dirname, "../public/home.html"));
});

router.get("/survey", function (req, res, next) {
    res.sendFile(path.resolve(__dirname, "../public/survey.html"));
});


// router.get("*", function (req, res) {
//     res.sendFile(path.resolve(__dirname, "../public/404.html"));
// });

module.exports = router;

