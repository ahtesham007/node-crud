const http = require("http");
const app = require("./app.js");
const server = http.createServer(app);
require("dotenv").config();
// connect with database
require("./database/db");

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});