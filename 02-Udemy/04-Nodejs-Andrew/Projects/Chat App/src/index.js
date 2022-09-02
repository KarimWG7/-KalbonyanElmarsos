const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Filter = require("bad-words");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

io.on("connection", (socket) => {
  console.log("New web socket connection");
  socket.emit("message", "Welcome");

  socket.broadcast.emit("message", "A new user has joind :)");

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback("Profanity is not allowed");
    }

    io.emit("message", message);
    callback();
  });

  socket.on("disconnect", (message) => {
    io.emit("message", "A user has left us :(");
  });

  socket.on("sendLocation", ({ lat, long }, callback) => {
    io.emit(
      "locationMessage",
      `https://www.google.com/maps/@${lat},${long},13z`
    );
    callback();
  });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
