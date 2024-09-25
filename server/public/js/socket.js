// con el script de socket
// mas la instancia de io()
// tengo cofigurado el socket del front
const socket = io();

document.querySelector("#register").addEventListener("click",()=> {
  // capturar los valores del formulario
  const name = document.querySelector("#name").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const photo = document.querySelector("#photo").value
  const userData = { name, email, password, photo }
  // crear un nuevo usuario (agregarlo al archivo)
  socket.emit("new user", userData)
    // el metodo emit necesita dos parametros
    // en primer lugar el nombre del mensaje a enviar
    // en segundo lugar la informacion a enviar
  // renderizar en tiempo real el usuario recien agregado a la base de datos (archivo)
})

// este archivo va a manejar todas las emisiones/recepeciones del front
socket.on("update users", data => {
  data = data.map(each=> `<div>${each.name} - ${each.email}</div>`).join("")
  document.querySelector("#update").innerHTML = data
})