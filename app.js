const express = require("express");
const cors = require("cors");
const artifactsRoute = require("./routes/artifactsRoute");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// health check - test end point to check if server is up and running
app.get("/api/v1/test", (req, res) => {
  res.status(200).send({ message: "server is up and running" });
});

// routes
app.use("/api/v1/", artifactsRoute);

module.exports = app;
