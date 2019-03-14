// modeled after week 20 activity 7 server.js file
// our dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets for heroku deployment
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes here

// Every other request will be sent to the React app
// not sure if this will be necessary
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, ".client/build/index.html"));
});

// If deployed, use the deployed database. Otherwise use the local googleBooks database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// start our port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});