const http = require("http");

const getUser = require("./modules/users");
const PORT = 3003;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const userName = url.searchParams.get("name");

  if (userName) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-type: text/plain";
    response.write(`Hello ${userName}`);
    response.end();
    return;
  }

  switch (request.url) {
    case "/?users":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type: application/json");
      response.write(getUser());
      response.end();
      break;

    case "/?name":
      response.statusCode = 400;
      response.statusMessage = "Bad Request";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Enter a name`);
      response.end();
      break;

    case "/":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Hello world`);
      response.end();
      break;

    default:
      response.statusCode = 500;
      response.statusMessage = "Internal Server Error";
      response.setHeader("Content-Type", "text/plain");
      response.write("wrong");
      response.end();
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
