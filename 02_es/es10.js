const numeros = [1, 2, 3, 4, 5];
const otrosNumeros = [6, 7, 8, 9];
// con spread operator
//const todosLosNumeros = [...numeros, ...otrosNumeros]
//console.log(todosLosNumeros);
let todos = [numeros, otrosNumeros]
//console.log("ANTES DE FLAT:");
//console.log(todos);
todos = todos.flat()
//console.log("DESPUES DE FLAT:");
//console.log(todos);

const cadena = "        sin espacios        "
console.log(cadena);
console.log(cadena.trim());