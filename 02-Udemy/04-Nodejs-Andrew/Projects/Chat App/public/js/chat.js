const socket = io();

const send = document.querySelector(".send");
const form = document.querySelector("form");
const sendLocation = document.getElementById("send-location");
const messageInput = form.querySelector("input");
const messages = document.getElementById("messages");

// Templates
const messageTemplate = document.getElementById("message-template").innerHTML;
const urlTemplate = document.getElementById("url-template").innerHTML;

socket.on("locationMessage", (url) => {
  const html = Mustache.render(urlTemplate, { url });
  messages.insertAdjacentHTML("beforeend", html);
});

socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, { message });
  messages.insertAdjacentHTML("beforeend", html);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  send.setAttribute("disabled", "disabled");

  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message, (error) => {
    send.removeAttribute("disabled");
    messageInput.value = "";
    messageInput.focus();
    if (error) {
      return console.log(error);
    }
    console.log("Message delivered");
  });
});

sendLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }
  sendLocation.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    socket.emit("sendLocation", { lat, long }, () => {
      sendLocation.removeAttribute("disabled");
      console.log("Location shared");
    });
  });
});
