const mongoose = require("mongoose");

const categorySchema = require("./../schema/categorySchema");

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
