const express = require('express');
const router = express.Router();
const path = require('path');


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// Routing
// ==========================
router.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../public/home.html"));
});

module.exports = router;

