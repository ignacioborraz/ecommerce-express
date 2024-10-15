import { socketServer } from "../../server.js";

let allMessages = [
  {
    username: "igna",
    message: "primer mensaje",
  },
];

const socketCb = (socket) => {
  console.log(socket.id);
  socket.emit("all messages", [...allMessages].reverse().slice(0,10).reverse());
  socket.on("new message", (data) => {
    allMessages.push(data);
    socketServer.emit("all messages", [...allMessages].reverse().slice(0,10).reverse());
  });
};

export default socketCb;
