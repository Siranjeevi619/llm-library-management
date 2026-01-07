const express = require("express");
const {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const app = express.Router();

app.post("/create", createBook);

app.get("get-book-all", getBook);

app.get("get-book-id/:id", getBookById);

app.put("/update-book/:id", updateBook);

app.delete("/delete-book/:id", deleteBook);

module.exports = app;
