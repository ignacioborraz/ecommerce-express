import productsMongoManager from "../data/mongo/managers/product.manager.js";

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await productsMongoManager.create(data);
    return res
      .status(201)
      .json({ message: "PRODUCT CREATED", response: response._id });
  } catch (error) {
    return next(error);
  }
};
const readAll = async (req, res, next) => {
  try {
    const filter = req.query;
    const response = await productsMongoManager.readAll(filter);
    if (response.length > 0) {
      return res.status(200).json({ message: "PRODUCTS READ", response });
    } else {
      const error = new Error("PRODUCTS NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
const read = async (req, res, next) => {
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
};
const update = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const data = req.body;
    const response = await productsMongoManager.update(pid, data);
    if (response) {
      return res
        .status(200)
        .json({ message: "PRODUCT UPDATE", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const response = await productsMongoManager.destroy(pid);
    if (response) {
      return res
        .status(200)
        .json({ message: "PRODUCT DELETED", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

export { create, readAll, read, update, destroy };
