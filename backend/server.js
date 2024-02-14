const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

// Set Static Folder
app.use(express.static(path.join(__dirname, "frontend")));

// for connection with client
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

// Run when client connects
io.on("connection", (socket) => {
  // Sending to client - frontend that can be catched by socket.on('variable', cb())
  socket.emit("message", "welcome to chatsApp");

  // Listen for chatMessage
  socket.on("send_message", (msgData) => {
    socket.broadcast.emit("receive_message", msgData);
  });
});

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
