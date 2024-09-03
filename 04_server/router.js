import productsManager from "./data/ProductsManager.js";

async function router(requerimientos, respuesta) {
  const url = requerimientos.url;
  const opts = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      respuesta
        //a la respuesta
        .writeHead(200, opts)
        //le estoy configurando los encazamientos con el codigo de estado y las opciones de configuracion de la solicitud
        .end("CODER API CONNECTED");
      //y el envio de la data solicitada (que es en este caso es la "landing" de mi servidor)
      break;
    case "/api/products":
      try {
        const products = await productsManager.readAll();
        return respuesta.writeHead(200, opts).end(JSON.stringify(products));
      } catch (error) {
        return respuesta
          .writeHead(error.statusCode || 404, opts)
          .end("NOT FOUND PRODUCTS");
      }
    default:
      respuesta.writeHead(404, opts).end("ENDPOINT NOT FOUND");
      break;
  }
}

export default router;
// 5. una vez definida la funcion de enrutamiento
// es necesario exportar el enrutador para ser utilizado por el servidor
// sino conecto server+router las rutas no existen para el servidor
