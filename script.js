const socket = io("https://try-chat.herokuapp.com/");
const messageForm = document.getElementById("send-container");
const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

nameForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value;
    appendMessage("You joined");
    socket.emit("new-user", name);

    socket.on("chat-message", data => {
        appendMessage(`${data.name}: ${data.message}`);
    });

    socket.on("user-connected", name => {
        appendMessage(`${name} has connected`);
    });
    socket.on("user-disconnected", name => {
        appendMessage(`${name} has disconnected`);
    });

    messageForm.addEventListener("submit", e => {
        e.preventDefault();
        const message = messageInput.value;
        appendMessage(`You: ${message}`);
        socket.emit("send-chat-message", message);
        messageInput.value = "";
    });
    function appendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message-div");
        messageElement.innerText = message;
        messageContainer.append(messageElement);
    }
});
