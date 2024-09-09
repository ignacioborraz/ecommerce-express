import fs from "fs";

// 1. defino la ruta del archivo que se va a crear
const path1 = "./fs/files/products.json";
const path2 = "./fs/files/users.json";
// 2. guardo en la variable "exists" el booleano que verifica si existe el archivo
const exists1 = fs.existsSync(path1);
const exists2 = fs.existsSync(path2);
//console.log(exists);

const data = JSON.stringify([]);

// 3. si no existen los archivos, los creo con un array vacio
if (!exists1) {
  fs.writeFileSync(path1, data);
}
if (!exists2) {
  fs.writeFileSync(path2, data);
}

// 4. empiezo a cargar la data
// 4.1 leo el archivo
const dataProducts = JSON.parse(fs.readFileSync(path1, "utf-8"));
const product1 = { title: "product 1", price: 20 };
const product2 = { title: "product 2", price: 100 };
dataProducts.push(product1);
dataProducts.push(product2);
// 4.2 escribo o sobre-escribo el archivo con la nueva data COMO TEXTO PLANO!!!
fs.writeFileSync(path1, JSON.stringify(dataProducts, null, 2));
console.log(dataProducts);

const dataUsers = JSON.parse(fs.readFileSync(path2, "utf-8"));
console.log(dataUsers);

// 5. para borrar primero verifico que existe el archivo
if (exists2) {
  fs.unlinkSync(path2);
}
