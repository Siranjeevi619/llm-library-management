const mongoose = require("mongoose");
const bookSchema = require("./../schema/bookSchema");

const book = mongoose.model("book", bookSchema);

module.exports = book;
