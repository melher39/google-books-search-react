// this file is responsible for creating our Book collection
const mongoose = require("mongoose");

// based off week 18 activity 20
// save a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// using the Schema constructor, we will create a new UserSchema object
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String,
        require: true
    }
});

// This creates our model from the above schema, using mongoose's model method
// mongoose.model("modelName", schema)
const Book = mongoose.model("Book", bookSchema);

// now we export the Article model
module.exports = Book;