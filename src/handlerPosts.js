const path = require("path");
const fs = require("fs");
const querystring = require("querystring");

const createPosts = (request, response) => {
  let allTheData = "";
  request.on("data", (chunkOfData) => {
    allTheData += chunkOfData;
  });
  request.on("end", () => {
    const filePath = path.join(__dirname, "posts.json");
    const convertedData = querystring.parse(allTheData);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500);
        response.end("error server");
      } else {
        obj = JSON.parse(data);
        obj[Date.now()] = convertedData.post;
        fs.writeFile(filePath, JSON.stringify(obj), (error) => {
          console.log(error);
        });
      }
    });
    response.writeHead(302, { location: "/" });
    response.end();
  });
};

module.exports = createPosts;
