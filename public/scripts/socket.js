const socket = io();

let username = "";

Swal.fire({
  title: "Enter your name!",
  input: "text",
  allowOutsideClick: false,
  inputValidator: (value) => !value && "Please! Enter your name!",
}).then((data) => {
  username = data.value;
  document.querySelector("#username").innerHTML = username;
});

socket.on("all messages", (data) => {
  data = data
    .map(
      (each) =>
        `<p class="bg-white p-1 m-1">${each.username.toUpperCase()}: ${
          each.message
        }</p>`
    )
    .join("");
  document.querySelector("#messages").innerHTML = data;
});

document.querySelector("#text").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const newMessage = document.querySelector("#text").value;
    socket.emit("new message", { username, message: newMessage });
    event.target.value = "";
  }
});
