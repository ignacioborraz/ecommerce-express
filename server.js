import "dotenv/config.js"
//primero importa la configuracion del modulo de dotenv
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import socketCb from "./src/routers/index.socket.js";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import morgan from "morgan";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import router from "./src/routers/index.router.js";
import dbConnect from "./src/utils/db.util.js";

// http server
const server = express();
const port = process.env.PORT || 8080;
// para usar las variables de entorno es necesario llamar al objeto process.env.NOMBRE_VARIABLE
const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect()
}
const httpServer = createServer(server);
httpServer.listen(port, ready);

// tcp server
const socketServer = new Server(httpServer);
socketServer.on("connection", socketCb);
export { socketServer }

// template engine
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

// middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"));
server.use("/public", express.static(__dirname + "/public"));

// routers
server.use(router);
server.use(errorHandler);
server.use(pathHandler);
