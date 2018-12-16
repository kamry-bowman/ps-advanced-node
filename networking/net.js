process.stdout.write("\u001B[2J\u001B[0;0f");

const server = require("net").createServer();
let counter = 0;
let sockets = {};

server.on("connection", socket => {
  socket.id = counter++;
  sockets[socket.id] = socket;
  console.log("Client connected");
  socket.write("Welcome new client!\n");

  socket.on("data", data => {
    Object.entries(sockets).forEach(([, clientSocket]) => {
      clientSocket.write(`${socket.id}: `);
      clientSocket.write(data);
    });
  });

  socket.on("end", () => {
    console.log("Client disconnected");
    delete sockets[socket.id]; 
  });
});

server.listen(8000, () => console.log("Server bound."));
