const express = require("express");
const connectDB = require("./config/db");

const bookRoutes = require("./router/bookRouter");
const userRoutes = require("./router/userRouter");
const issueRoutes = require("./router/issueRouter");

const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

app.use("/home", (req, res) => {
  res.send("HELLO HERO");
});

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/issues", issueRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS STARTED HERO !!! ${PORT}`);
});
