// based off week 20 activity 11
// dependencies
const router = require("express").Router();
const bookRoutes = require("./books.js");
const googleSearch = require("./googleSearch.js");

// Book routes 
// this is where we "add" the second part of our api routes, either our
// google API or DB paths
router.use("/books", bookRoutes);
router.use("/google", googleSearch);

module.exports = router;