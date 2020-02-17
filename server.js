const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(process.env.PORT || 3000);
console.log("Server on port %d", server.address().port);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/html/index.html");
});
app.use(express.static(path.join(__dirname, "")));

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
