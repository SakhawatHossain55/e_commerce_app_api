const express = require("express");
const database = require("mime-db");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Success full"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});

// database n = ecommerceapp
// database p = JJ6AZL$zmDJbgLS
