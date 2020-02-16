const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3000);

app.get("/", function(req, res) {
    res.sendFile("./" + "index.html");
});

const users = [];

io.on("connection", socket => {
    socket.on("new-user", name => {
        users[socket.id] = name;
        socket.broadcast.emit("user-connected", name);
    });
    socket.on("send-chat-message", message => {
        socket.broadcast.emit("chat-message", {
            message: message,
            name: users[socket.id]
        });
    });
    socket.on("disconnect", () => {
        socket.broadcast.emit("user-disconnected", users[socket.id]);
        delete users[socket.id];
    });
});
