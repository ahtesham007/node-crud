const mongoose = require("mongoose");

require("dotenv").config();
mongoose.set("strictQuery", true);

const database = mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log("connected to mongoDB!");
    } else {
      console.log("connection to mongoDB failed \n" + error);
    }
  }
);

module.exports = database;