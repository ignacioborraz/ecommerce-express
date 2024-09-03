import crypto from "crypto";

class ProductsManager {
  static #all = [
    {
      id: crypto.randomBytes(12).toString("hex"),
      category: "shoes",
      title: "ladystork",
      price: 100,
      stock: 1000,
      photo: "photo.png",
    },{
      id: crypto.randomBytes(12).toString("hex"),
      category: "shoes",
      title: "manstork",
      price: 50,
      stock: 2000,
      photo: "photo.png",
    },
  ];
  create(data) {
    const promesa = new Promise((resolve, reject) => {
      try {
        data.id = crypto.randomBytes(12).toString("hex");
        // lo vamos a definir de tipo hexadecimal y de 12 bytes
        // esto no es capricho, es para que el id, luego sea compatible con los id "autogenerados" de mongo
        ProductsManager.#all.push(data);
        console.log("EXITO AL CREAR: ID-" + data.id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    return promesa;
  }
  readAll() {
    try {
      const promesa = new Promise((resolve, reject) => {
        if (ProductsManager.#all.length > 0) {
          resolve(ProductsManager.#all);
        } else {
          reject("ERROR AL LEER TODOS");
        }
      });
      return promesa;
    } catch (error) {
      reject(error);
    }
  }
}

async function test() {
  try {
    const manager = new ProductsManager();
    await manager.readAll();
    manager.create({
      category: "shoes",
      title: "ladystork",
      price: 100,
      stock: 1000,
      photo: "photo.png",
    });
    manager.create({
      category: "shoes",
      title: "nike",
      price: 120,
      stock: 500,
      photo: "photo2.jpg",
    });
    await manager.readAll();
  } catch (error) {
    console.log(error);
  }
}

//test();

const productsManager = new ProductsManager();
export default productsManager;
// 6. exporto el manager con los metodos de gestion de productos
