const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')
require("dotenv").config();
const PORT = 8000;

const api = require("./routes/api");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello server.js");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to mongodb 🎉");
  })
  .catch((err) => {
    console.log(err);
  });

//
app.use("/api", api);

app.listen(PORT, (req, res) => {
  console.log("Server is running on " + PORT + " 🏃🏼‍♀️💨");
});
