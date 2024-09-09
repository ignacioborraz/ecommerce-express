import fs from "fs";

const ruta = "./fs/files/products.json";

// 0. para verificar que el archivo existe, deberiamos usar el meotod existsSync ya visto!!!

const dataFs = fs.readFile(ruta, "utf-8", (error, exito) => {
  if (error) {
    console.log(error);
  } else {
    console.log(exito);
    const parsedata = JSON.parse(exito);
    const data = { title: "new product", price: 1000 };
    parsedata.push(data);
    const stringData = JSON.stringify(parsedata, null, 2);
    fs.writeFile(ruta, stringData, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("created");
      }
    });
  }
});
