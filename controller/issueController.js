const Issue = require("../model/Issue");
const Book = require("../model/Book");
const CommonResponse = require("../utils/CommonResponse");
const ResponseStatus = require("../utils/responseStatus");

const issueBook = async (req, res) => {
  try {
    const { bookId, userId, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book || book.bookAvailableCopies <= 0) {
      return res
        .status(400)
        .json(
          new CommonResponse(
            "Book Not Available",
            null,
            ResponseStatus.REJECTED
          )
        );
    }

    book.bookAvailableCopies -= 1;
    await book.save();

    const response = await Issue.create({
      bookId,
      userId,
      dueDate,
      status: "ISSUED",
    });

    return res
      .status(201)
      .json(
        new CommonResponse(
          "Book Issued Successfully",
          response,
          ResponseStatus.ACCEPTED
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new CommonResponse(
          "INTERNAL SERVER ERROR",
          error.message,
          ResponseStatus.FAILED
        )
      );
  }
};

const returnBook = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue || issue.status === "RETURNED") {
      return res
        .status(400)
        .json(
          new CommonResponse(
            "Invalid Return Operation",
            null,
            ResponseStatus.REJECTED
          )
        );
    }

    issue.status = "RETURNED";
    issue.returnDate = new Date();
    await issue.save();

    const book = await Book.findById(issue.bookId);
    book.bookAvailableCopies += 1;
    await book.save();

    return res
      .status(200)
      .json(
        new CommonResponse(
          "Book Returned Successfully",
          issue,
          ResponseStatus.ACCEPTED
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new CommonResponse(
          "INTERNAL SERVER ERROR",
          error.message,
          ResponseStatus.FAILED
        )
      );
  }
};

const getAllIssuedBooks = async (req, res) => {
  try {
    const response = await Issue.find().populate("bookId").populate("userId");

    return res
      .status(200)
      .json(
        new CommonResponse(
          "Issued Books Retrieved Successfully",
          response,
          ResponseStatus.ACCEPTED
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new CommonResponse(
          "INTERNAL SERVER ERROR",
          error.message,
          ResponseStatus.FAILED
        )
      );
  }
};

const getIssuedBooksByUser = async (req, res) => {
  try {
    const response = await Issue.find({ userId: req.params.userId }).populate(
      "bookId"
    );

    return res
      .status(200)
      .json(
        new CommonResponse(
          "User Issued Books Retrieved Successfully",
          response,
          ResponseStatus.ACCEPTED
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new CommonResponse(
          "INTERNAL SERVER ERROR",
          error.message,
          ResponseStatus.FAILED
        )
      );
  }
};

module.exports = {
  issueBook,
  returnBook,
  getAllIssuedBooks,
  getIssuedBooksByUser,
};
