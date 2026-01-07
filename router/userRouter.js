const express = require("express");
const { createUser } = require("../controller/userController");

const app = express.Router();

app.post("/login");

app.post("/register", createUser);

app.get("/get-user");

module.exports = app;
