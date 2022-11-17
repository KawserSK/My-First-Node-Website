const http = require("http");
const fs = require("fs");

const myServer = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.readFile("home.html", "utf8", function (error, data) {
      res.end(data);
    });
  } else if (req.url == "/contact") {
    fs.readFile("contact.html", "utf8", function (error, data) {
      res.end(data);
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", "utf8", function (error, data) {
      res.end(data);
    });
  } else if (req.url == "/terms") {
    fs.readFile("terms.html", "utf8", function (error, data) {
      res.end(data);
    });
  } else {
    fs.readFile("404.html", "utf8", function (error, data) {
      res.end(data);
    });
  }
});

myServer.listen(8080);
console.log("Server is running Successfully at 8080");
