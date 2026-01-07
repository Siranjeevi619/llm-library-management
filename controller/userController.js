const User = require("../model/User");
const CommonResponse = require("../utils/CommonResponse");
const ResponseStatus = require("../utils/responseStatus");

const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    return res
      .status(201)
      .json(
        new CommonResponse(
          "User Created Successfully",
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

const getAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    return res
      .status(200)
      .json(
        new CommonResponse(
          "Users Retrieved Successfully",
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

const getUserById = async (req, res) => {
  try {
    const response = await User.findById(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json(
          new CommonResponse("User Not Found", null, ResponseStatus.REJECTED)
        );
    }
    return res
      .status(200)
      .json(
        new CommonResponse(
          "User Retrieved Successfully",
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

const deleteUser = async (req, res) => {
  try {
    const response = await User.findByIdAndDelete(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json(
          new CommonResponse("User Not Found", null, ResponseStatus.REJECTED)
        );
    }
    return res
      .status(200)
      .json(
        new CommonResponse(
          "User Deleted Successfully",
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
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
