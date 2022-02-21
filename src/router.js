const path = require("path");
const publicHandler = require("./handlerPublic");
const createPosts = require("./handlerPosts");

const router = (request, response) => {
  const endpoint = request.url;
  const method = request.method;
  if (endpoint === "/") {
    publicHandler("/public/index.html", response);
  }else if (endpoint.includes("public")) {
    publicHandler(endpoint, response);
  }else if (endpoint == "/posts") {
    publicHandler("src/posts.json", response);
  } else if (endpoint == "/create-post" && method === "POST") {
    createPosts(request, response);
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
};

module.exports = router;
