import express from "express";
import morgan from "morgan";
import cors from "cors";
import { engine } from "express-handlebars";
// importo la clase contructora del servidor socket del backend
import { Server } from "socket.io";
// importo el creador de servidores de http
// debido a que socket NO ES compatible directamente con express
import { createServer } from "http";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import socket from "./src/routers/index.socket.js";

try {
  const server = express();
  const port = 8000;
  const ready = () => console.log("server ready on port " + port);
  // defino un servidor de HTTP con las configuraciones del server de express
  const httpServer = createServer(server)
  // defino un servidor TCP en base al servidor HTTP
  const tcpServer = new Server(httpServer)
  // al servidor de express le configuramos rutas
  // en cambio al servidor de socket le configuramos llamadas/emisiones
  // con "connection" tengo configurado
  // el socket del back
  tcpServer.on("connection", socket)
  // levanto el servidor http en lugar del de express para iniciar el handshake
  httpServer.listen(port, ready);

  server.use(morgan("dev"));
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());
  server.use("/public", express.static("public"));

  server.engine("handlebars", engine());
  server.set("view engine", "handlebars");
  server.set("views", __dirname + "/src/views");

  //obligo a mi servidor a usar las rutas del enrutador
  server.use(router);
  server.use(errorHandler);
  server.use(pathHandler);
} catch (error) {
  console.log(error);
}
