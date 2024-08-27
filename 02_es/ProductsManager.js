class ProductsManager {
  static #all = [];
  static #id = 0;
  // para guardar todos los productos en la memoria del programa
  constructor() {}
  // con static defino una propiedad de la clase!
  // con # defino una propiedad/metodo privada
  create = (data) => {
    //para crear un producto
    //necesito que me pasen como argumento los datos del producto
    //buscar la forma de agregar un id aleatorio
    //agregarlo al array all
    data.id = ProductsManager.#id;
    ProductsManager.#id++;
    ProductsManager.#all.push(data);
    //this hace referencia a propiedades de la instancia
    //el nombre de la clase hace referencia a propiedades de la clase (staticas)
  };
  readAll = () => ProductsManager.#all;
  readByTitle = (text) =>
    ProductsManager.#all.find((each) =>
      each.title.toLowerCase().includes(text.toLowerCase())
    );
}

const manager = new ProductsManager();
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
const all = manager.readAll();
console.log(all);
//console.log(manager.readByTitle("nike"));
//console.log(manager.readByTitle("ni"));
//console.log(manager.readByTitle("i"));
