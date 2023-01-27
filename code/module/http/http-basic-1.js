const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HI Shankat :> Its home page");
  }
  if (req.url === "/about") {
    res.end("Hi its about page Shankar!!");
  }
  res.end(`
    <h1>Oops!!!</h1>
    <p>Your page is not found please back to home page</p>
    <a href="/">Home page</a>
 `);
});

server.listen(5000);
