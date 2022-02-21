// calling Module
const http = require("http");
const router = require("./router.js");

// Initialize the server
const server = http.createServer(router);

// Detect the port number
const PORT = 4000;

// Listen
server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}.  Ready to accept requests!`
  );
});
