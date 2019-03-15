// require our books model
const db = require("../models");

// defining the methods for the booksController which will be used by the routes
// modeled after week 20 activity 11
module.exports = {
    // find all the books that have been saved to the db already
    getAllBooks: function(req, res) {
        db.Book
        .find(req.query)
        .then(allBooks => res.json(allBooks))
        .catch(err => res.status(422).json(err));
    },
    // save a book to our database
    saveBook: function (req, res) {
        db.Book
        .create(req.body)
        .then(bookContent => res.json(bookContent))
        .catch(err => res.status(422).json(err));
    },
    // delete a book by its ID
    deleteBook: function(req, res) {
        db.Book
        .findByIdAndDelete({
            _id: req.params.id
        }).then(deletedBook => res.json(deletedBook))
        .catch(err => res.status(422).json(err));
    }
}