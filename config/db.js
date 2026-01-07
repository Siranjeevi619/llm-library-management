const db = require("mongoose");

const connectDB = () =>
  db
    .connect("mongodb://localhost:27017/library-management-llm", {
      connectTimeoutMS: 30000,
    })
    .then(() => {
      console.log("DB CONNECTED HERO");
    })
    .catch((err) => {
      console.log("Error occured :", err);
    });

module.exports = connectDB;
