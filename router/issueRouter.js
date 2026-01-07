const express = require("express");
const {
  issueBook,
  getAllIssuedBooks,
  returnBook,
  getIssuedBooksByUser,
} = require("../controller/issueController");

const router = express.Router();

router.post("/book-issues", issueBook);

router.get("/issues", getAllIssuedBooks);

router.put("/issues/:issueId", returnBook);

router.get("/issues/:getUserId", getIssuedBooksByUser);

module.exports = router;
