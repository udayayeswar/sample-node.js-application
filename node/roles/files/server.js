const http = require("http");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  // Send the HTTP header
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body as "Hello World"
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});