const socket = io("http://localhost");
const messageForm = document.getElementById("send-container");
const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const name = prompt("Introduce tu nombre");

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
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
