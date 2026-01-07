const express = require("express");

const app = express.Router();

app.post("/create");

app.get("get-book-all");

app.get("get-book-id/:id");

app.put("/update-book/:id");

app.delete("/delete-book/:id");

module.exports = app;
