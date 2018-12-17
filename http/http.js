const server = require("http").createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello world\n");

  setTimeout(() => {
    res.write('Another Hello World\n');
  }, 1000);

  setTimeout(() => {
    res.write('Another Hello World\n');
    res.end();
  }, 2000);
  
});

server.listen(8000);
