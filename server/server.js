import express from "express";
import productsManager from "./src/data/products.manager.js";

try {
  const server = express();
  const port = 8000;
  const ready = () => console.log("server ready on port " + port);

  // obligo al servidor a usar la funcionalidad urlencoded de express
  // para habilitar la lectura de datos complejos en la url (parametros y consultas)
  server.use(express.urlencoded({ extended: true }));
  // obligo al servidor a usar la funcionalidad de recepcion y emision del formato json
  // para poder recibir objetos en la propiedad req.body y ademas se aplica json en toda la aplicacion
  server.use(express.json())

  // para levantar el servidor en el puerto "port"
  server.listen(port, ready);

  // para definir una solicitud/ruta para leer datos el método get()
  server.get("/", index);
  server.get("/api/products", getAllProducts);
  server.get("/api/products/:pid", getProduct);
  // la creación es con post() pero esto es un buen acercamiento
  server.get("/api/products/:title/:price/:quantity", create);

} catch (error) {
  console.log(error);
}

function index(requirement, response) {
  try {
    return response.status(200).json({
      message: "CODER COMMERCE API",
    });
  } catch (error) {
    const { statusCode, message } = error;
    return response
      .status(statusCode || 500)
      .json({ message: message || "FATAL ERROR" });
  }
}

async function getAllProducts(req, res) {
  try {
    let { category } = req.query;
    let response;
    if (!category) {
      response = await productsManager.readAll();
    } else {
      response = await productsManager.readAll(category);
    }
    if (response.length > 0) {
      return res.status(200).json({ message: "PRODUCTS READ", response });
    } else {
      const error = new Error("NOT FOUND PRODUCTS");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    const { statusCode, message } = error;
    return res
      .status(statusCode || 500)
      .json({ message: message || "FATAL ERROR" });
  }
}

async function getProduct(req, res) {
  // res es el objeto de respuesta a enviar al cliente
  try {
    const { pid } = req.params;
    const response = await productsManager.read(pid);
    // response es la respuesta que se espera del manager (para leer un producto)
    if (response) {
      return res.status(200).json({ message: "PRODUCT READ", response });
    } else {
      const error = new Error("NOT FOUND PRODUCT");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    const { statusCode, message } = error;
    return res
      .status(statusCode || 500)
      .json({ message: message || "FATAL ERROR" });
  }
}

async function create(req, res) {
  try {
    const { title, price, quantity } = req.params;
    let { category, supplier } = req.query;
    if (!category) {
      category = "none";
    }
    if (!supplier) {
      supplier = "none";
    }
    const response = await productsManager.create({
      title,
      price,
      quantity,
      category,
      supplier,
    });
    return res.status(201).json({ message: "PRODUCT CREATED", response });
  } catch (error) {
    const { statusCode, message } = error;
    return response
      .status(statusCode || 500)
      .json({ message: message || "FATAL ERROR" });
  }
}