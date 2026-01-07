const express = require("express");
const Book = require("../model/Book");
const ResponseStatus = require("../utils/responseStatus");
const CommonResponse = require("../utils/CommonResponse");

const createBook = async (req, res) => {
  try {
    const response = await Book.create(req.body);

    return res
      .status(201)
      .json(
        new CommonResponse(
          "Book Created Successfully",
          response,
          ResponseStatus.ACCEPTED
        )
      );
  } catch (error) {
    console.log(error);
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

const getBook = async (req, res) => {
  try {
    const response = await Book.find();
    return res
      .status(200)
      .json(
        new CommonResponse(
          "Retrieved Books Successfully",
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
          ResponseStatus.REJECTED
        )
      );
  }
};

const getBookById = async (req, res) => {
  try {
    const response = await Book.findById(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json(
          new CommonResponse("Book Not Found", null, ResponseStatus.REJECTED)
        );
    }
    return res
      .status(200)
      .json(
        new CommonResponse(
          "Retrieved Book Successfully",
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

const updateBook = async (req, res) => {
  try {
    const response = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!response) {
      return res
        .status(404)
        .json(
          new CommonResponse("Book Not Found", null, ResponseStatus.REJECTED)
        );
    }
    return res
      .status(200)
      .json(
        new CommonResponse(
          "Book Updated Successfully",
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

const deleteBook = async (req, res) => {
  try {
    const response = await Book.findByIdAndDelete(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json(
          new CommonResponse("Book Not Found", null, ResponseStatus.REJECTED)
        );
    }
    return res
      .status(200)
      .json(
        new CommonResponse(
          "Book Deleted Successfully",
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
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
};
