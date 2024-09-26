import { socketServer } from "../../server.js";

let allMessages = [
  {
    username: "igna",
    message: "primer mensaje",
  },
];

const socketCb = (socket) => {
  //socket es la variable que corresponde al socket (punto de conexion)
  //socketServer es la variable que corresponde a todos los sockets conectados
  console.log(socket.id);
  socket.emit("all messages", [...allMessages].reverse().slice(0,10).reverse());
  socket.on("new message", (data) => {
    allMessages.push(data);
    socketServer.emit("all messages", [...allMessages].reverse().slice(0,10).reverse());
  });
};

// apenas se conecta un usuario el socket de back tiene que mandar los ultimos mensajes del chat

export default socketCb;
