const ResponseStatus = require("./responseStatus");

class CommonResponse {
  CommonResponse(message, data = null, status = ResponseStatus.ACCEPTED) {
    this.message = message;
    this.data = data;
    this.status = status;
    this.timestamp = new Date();
  }
}

modules.exports = CommonResponse;
