class ProductsManager {
  static #all = [];
  static #id = 0;
  create(data) {
    const promesa = new Promise((resolve, reject) => {
      try {
        data.id = ProductsManager.#id;
        ProductsManager.#all.push(data);
        ProductsManager.#id++;
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

test();
