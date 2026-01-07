const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = 4000;

app.use("/home", (req, res) => {
  res.send("HELLO HERO");
});

connectDB();

app.listen(PORT, () => {
  console.log(`SERVER IS STARTED HERO !!! ${PORT}`);
});
