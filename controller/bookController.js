const express = require("express");
const book = require("../model/Book");

const createBook = async (req, res) => {
  try {
    const response = await book.create(req.body);
    res
      .status(201)
      .json(new CommonResponse("Book Created SuccessFully", book, ));
  } catch (error) {

  }
};
