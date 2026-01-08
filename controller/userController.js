const bcrypt = require("bcryptjs");
const User = require("../model/User");
const CommonResponse = require("../utils/CommonResponse");
const ResponseStatus = require("../utils/responseStatus");
const generateToken = require("../utils/generateToken");

const createUser = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;

    const userExists = await User.findOne({ userEmail });
    if (userExists) {
      return res
        .status(400)
        .json(
          new CommonResponse(
            "User already exists",
            null,
            ResponseStatus.REJECTED
          )
        );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      userEmail,
      password: hashedPassword,
    });

    return res.status(201).json(
      new CommonResponse(
        "User Registered Successfully",
        {
          _id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          token: generateToken(user._id),
        },
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

const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const user = await User.findOne({ userEmail });
    if (!user) {
      return res
        .status(401)
        .json(
          new CommonResponse(
            "Invalid credentials",
            null,
            ResponseStatus.REJECTED
          )
        );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json(
          new CommonResponse(
            "Invalid credentials",
            null,
            ResponseStatus.REJECTED
          )
        );
    }

    return res.status(200).json(
      new CommonResponse(
        "Login Successful",
        {
          _id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          token: generateToken(user._id),
        },
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
  loginUser,
};
