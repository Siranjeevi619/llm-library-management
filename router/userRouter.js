const express = require("express");
const router = express.Router();

const {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

router.post("/create", createBook);
router.get("/get-book-all", getBook);
router.get("/get-book-id/:id", getBookById);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
