const express = require("express");

const app = express();

const hostname = "localhost";
const port = 8080;

app.get("/", function (req, res) {
  res.send("<h4>Hello World Nodejs</h4>");
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
