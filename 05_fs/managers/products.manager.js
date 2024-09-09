import fs from "fs";
import crypto from "crypto";

class ProductsManager {
  constructor(path) {
    this.path = path;
    this.exists();
  }
  exists() {
    // 0. apenas se crea la instancia se tiene que verificar si existe o no existe el archivo
    // si no existe, hay que crearlo con un array vacío
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    } else {
      console.log("file already exists");
    }
  }
  async read() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parseData = JSON.parse(data);
      //console.log(parseData);
      return parseData;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const all = await this.read();
      all.push(data);
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return data.id;
    } catch (error) {
      console.log(error);
    }
  }
}

const productsManager = new ProductsManager("./fs/files/products.json");
export default productsManager;
