const path = require("path");
const fs = require("fs");

const publicHandler = (url, response) => {
  const filePath = path.join(__dirname, "..", url);
  const extention = path.extname(url);

  const contentType = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".html": "text/html",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".json": "application/json",
    ".ico": "text/plain",
  };

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500);
      response.end("SERVER ERROR!!");
    } else {
      response.writeHead(200, { "Content-Type": contentType[extention] });
      response.end(file);
    }
  });
};

module.exports = publicHandler;
