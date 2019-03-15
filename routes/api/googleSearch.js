// this file will be responsible for connecting to the Google Books API
// modeled after week 20 activity 8 
// dependencies
const axios = require("axios");
const router = require("express").Router();

// once we hit this route /api/google
router.get("/", (req, res) => {
    // make the API call to the google books api
    axios
        .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        // retrieve the data we actually want, which is in the `items` array
        .then(results => results.data.items)
        // thrn convert this data into a json file ready for us to manipulate
        .then(results => res.json(results))
        // and if there is an error, catch it and return it to us
        .catch(err => res.status(422).json(err));
});

module.exports = router;