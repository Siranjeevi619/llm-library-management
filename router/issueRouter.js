const express = require("express");
const { issueBook } = require("../controller/issueController");

const app = express.Router();

app.post("/book-issues", issueBook);

app.get("/issues", getAllIssuedBooks);

app.put("/issues/:issueId", returnBook);

app.get("/issues/:getUserId", getIssuedBooksByUser);
