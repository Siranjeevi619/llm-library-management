const express = require("express");

const app = express.Router();

app.post("/issues");

app.get("/issues");

app.put("/issues/:issueId");

app.get("/issues/:getUserId");
