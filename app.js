const express = require("express");

const app = express();

app.use(express.json());

// mongoose

app.get("/", (req, res) => {
  res.send("get request from local vercel");
});

app.get("/users", async (req, res) => {
  try {
    res.send({ body: req.body, message: "success" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
