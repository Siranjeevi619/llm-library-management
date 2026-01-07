const ResponseStatus = require("./responseStatus");

class CommonResponse {
  constructor(message, data = null, status = ResponseStatus.ACCEPTED) {
    this.message = message;
    this.data = data;
    this.status = status;
    this.timestamp = new Date();
  }
}

module.exports = CommonResponse;
