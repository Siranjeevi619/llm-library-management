const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    "SIRANJEEVI____LIBRAAR",
    { expiresIn: "1d" }
  );
};

module.exports = generateToken;
