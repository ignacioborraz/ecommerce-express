let age = 33;

function printAge(num) {
  let numX2 = num * 2;
  age = age + numX2;
  //console.log(age);
}

//console.log(edad);

//var numx2 = 10 es lo mismo que directamente numx2 = 10
//numX2 = numX2+10
//console.log(numX2);

age = 20;
printAge(5);
printAge(10);
//console.log(age);

/* FUNCION TRADICIONAL */
nombreDeLaFuncion();

function nombreDeLaFuncion() {
  // instrucciones que debe realizar la función cada vez que se ejecuta
  const fecha = new Date();
  //console.log(fecha.toLocaleDateString());
}

nombreDeLaFuncion();
nombreDeLaFuncion();

const edad = 30;

//funcionFlecha(50)

const funcionFlecha = (num) => {
  // instrucciones que debe realizar la función cada vez que se ejecuta
  num = (num + 10) / 2;
  console.log(num);
};

funcionFlecha(10);
funcionFlecha(25);

const flechaUnaLinea = (num1, num2) => num1 * num2;

const resultado1 = flechaUnaLinea(10, 20);
//console.log(resultado1);

const resultado2 = flechaUnaLinea(-5, 10.2);
//console.log(resultado2);