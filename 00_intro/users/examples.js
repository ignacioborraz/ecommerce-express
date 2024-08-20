const numero = 1234
console.log(typeof numero);

const cadenaDeTexto = "cadena o string"
let cadenaSimple = 'con comilla doble o simple'
cadenaSimple = undefined
console.log(typeof cadenaSimple);

const verdadero = true
let falso = false
falso = null
console.log(typeof falso);

const objeto = {
  ancho: 10,
  largo: 15,
  estaPintado: true,
  descripcion: "es de madera balsa y es por lo general rectangular"
}
console.log(typeof objeto);

class Objeto {
  constructor() {}
}
console.log(typeof Objeto);

function funcion(params) {
  
}
console.log(typeof funcion);

const array = [numero, cadenaDeTexto, cadenaSimple, verdadero, falso]
console.log(typeof array);
