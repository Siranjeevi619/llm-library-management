const jwt = require("jsonwebtoken");
const userModel = require("../model/User");
const CommonResponse = require("../utils/CommonResponse");
const ResponseStatus = require("../utils/responseStatus");

const protect = async (req, res, next) => {
  let token;
  if (
    req.header.authorization &&
    req.header.authorization.startswith("Bearer")
  ) {
    try {
      token = req.header.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findById(decoded.id).select("-password");
      if (!req.user) {
        return res
          .status(401)
          .json(
            new CommonResponse("User Not Found", null, ResponseStatus.REJECTED)
          );
      }
      next();
    } catch (e) {
      return res
        .status(500)
        .json(
          new CommonResponse(
            `Not authorized , no token : +${e.getMessage()}`,
            e,
            ResponseStatus.REJECTED
          )
        );
    }
  }
};

module.exports = protect;
