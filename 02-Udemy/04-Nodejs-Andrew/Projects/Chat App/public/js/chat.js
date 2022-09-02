const socket = io();

const send = document.querySelector(".send");
const form = document.querySelector("form");
const sendLocation = document.getElementById("send-location");
const messageInput = form.querySelector("input");
const messages = document.getElementById("messages");
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;
const sidebar = document.getElementById("sidebar");

// Templates
const messageTemplate = document.getElementById("message-template").innerHTML;
const urlTemplate = document.getElementById("url-template").innerHTML;

//Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.on("locationMessage", (message) => {
  const html = Mustache.render(urlTemplate, {
    username: message.username,
    url: message.url,
    createdAt: moment(message.createdAt).format("hh:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
});

socket.on("message", (message) => {
  console.log(message.text);
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("hh:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
});
socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
  });
  sidebar.innerHTML = html;
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
socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "./";
  }
});
