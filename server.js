// modeled after week 20 activity 7 server.js file
// activity 11
// our dependencies
const express = require("express");
// const path = require("path");
const routes = require("./routes");
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

// Add routes, both API and view
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local googleBooks database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// start our port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});