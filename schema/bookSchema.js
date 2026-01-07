const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  booktitle: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  bookGenre: {
    type: String,
    required: true,
  },
  bookTotalCopies: {
    type: Number,
    required: true,
  },
  bookAvailableCopies: {
    type: Number,
    required: true,
  },
});

module.exports = bookSchema;
