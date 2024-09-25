import usersManager from "../data/users.manager.js";

const socketCb = async (socket) => {
  console.log("socket connected id: "+ socket.id);
  // esta callback va a manejar todas las emisiones/recepeciones del socket del backend
  socket.on("new user", async data=> {
    const id = await usersManager.create(data)
    const allUsers = await usersManager.readAll()
    socket.emit("update users", allUsers)
  })
  const allUsers = await usersManager.readAll()
  socket.emit("update users", allUsers)
}

export default socketCb