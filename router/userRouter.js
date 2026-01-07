const express = require("express");

const app = express.Router();

app.post("/login");

app.post("/register");

app.get("/get-user");

module.exports = app;
