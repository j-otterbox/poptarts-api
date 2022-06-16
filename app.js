const http = require("http");

const server = http.createServer((req, res) => {
  console.log("ayy lmao we have a new request");
  res.end("you have hit the server");
});

server.listen(3000);
