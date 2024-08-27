const objeto = {
  nombre: "silla",
  material: "madera",
  tapizado: "pana",
  patas: 4
}

const claves = Object.keys(objeto)
console.log(claves);

const valores = Object.values(objeto)
console.log(valores);

const clavesYvalores = Object.entries(objeto)
console.log(clavesYvalores);
