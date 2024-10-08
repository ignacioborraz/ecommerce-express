import productsMongoManager from "../data/mongo/managers/product.mongo.js";

async function create(req, res, next) {
  try {
    const data = req.body;
    const response = await productsMongoManager.create(data);
    return res
      .status(201)
      .json({ message: "PRODUCT CREATED", response: response._id });
  } catch (error) {
    return next(error);
  }
}

async function readAll(req, res, next) {
  try {
    const filter = req.query;
    const response = await productsMongoManager.readAll(filter);
    if (response) {
      return res.status(200).json({ message: "PRODUCTS READ", response });
    } else {
      const error = new Error("PRODUCTS NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}
async function read(req, res, next) {
  try {
    const { pid } = req.params;
    const response = await productsMongoManager.read(pid);
    if (response) {
      return res.status(200).json({ message: "PRODUCT READ", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}
async function update(req, res, next) {
  try {
    const { pid } = req.params;
    const data = req.body;
    const response = await productsMongoManager.update(pid, data);
    if (response) {
      return res.status(200).json({ message: "PRODUCT UPDATE", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}
async function destroy(req, res, next) {
  try {
    const { pid } = req.params;
    const response = await productsMongoManager.destroy(pid);
    if (response) {
      return res.status(200).json({ message: "PRODUCT DELETED", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

export { create, readAll, read, update, destroy };
