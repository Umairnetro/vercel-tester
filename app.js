const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// mongoose
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

app.get("/home", (req, res) => {
  res.send("get request");
});

app.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  await user.save();

  res.send("post request");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ users, message: "success" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
