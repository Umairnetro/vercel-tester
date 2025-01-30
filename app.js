const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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
