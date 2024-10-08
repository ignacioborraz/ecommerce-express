import productsMongoManager from "../data/mongo/managers/product.mongo.js";
import Controller from "./controller.js";

const productsController = new Controller(productsMongoManager, "PRODUCT");
const { create, readAll, read, update, destroy } = productsController;

export { create, readAll, read, update, destroy };
