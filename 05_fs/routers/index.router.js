import productsManager from "../managers/products.manager.js";

async function router(req, res) {
  const url = req.url;
  const opts = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      return res.writeHead(200, opts).end("API CONNECTED");
    case "/products":
      const data = await productsManager.read();
      return res.writeHead(200, opts).end(JSON.stringify(data));
    case "/products/create":
      const one = { title: "prod", price: 100 };
      const id = await productsManager.create(one);
      return res.writeHead(201, opts).end(JSON.stringify(id));
    default:
      return res.writeHead(404, opts).end("ENDPOINT NOT FOUND");
  }
}

export default router;
