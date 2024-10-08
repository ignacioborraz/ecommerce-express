import { Router } from "express";
import {
  create,
  destroy,
  read,
  readAll,
  update,
} from "../../controllers/products.controller.js";

const productsApiRouter = Router();

productsApiRouter.post("/", create);
productsApiRouter.get("/", readAll);
productsApiRouter.get("/:pid", read);
productsApiRouter.put("/:pid", update);
productsApiRouter.delete("/:pid", destroy);

export default productsApiRouter;
