// dependencies
// based off week 20 activity 11 
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
// if API routes are the target, then redirect that to the proper route
router.use("/api", apiRoutes);

// Every other request will be sent to the React app, if no API routes are hit
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;