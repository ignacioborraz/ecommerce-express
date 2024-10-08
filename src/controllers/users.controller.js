import usersMongoManager from "../data/mongo/managers/user.mongo.js";
import Controller from "./controller.js";

const usersController = new Controller(usersMongoManager, "USER");
const { create, readAll, read, update, destroy } = usersController;

export { create, readAll, read, update, destroy };
