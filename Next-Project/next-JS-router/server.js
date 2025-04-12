const { createServer } = require("http");
const url = require("url");

const server = createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;

  if (pathName === "/") {
    res.end("Hello word");
  } else if (pathName === "/test") {
    res.end("Hello Test");
  } else {
    res.end("Url not be found!");
  }
});

server.listen(8000, () => console.log("Listening for requests on port 8000!"));
