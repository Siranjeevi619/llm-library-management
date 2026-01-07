const mongoose = require("mongoose");
const issueSchema = require("../schema/issueSchema");

const issueModel = mongoose.model("Issue", issueSchema);

module.exports = issueModel;
