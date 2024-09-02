const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2, cbExito, cbFracaso) => {
  if (n2 !== 0) {
    const resultado = n1 / n2;
    cbExito(resultado);
  } else {
    cbFracaso("No se puede dividir por cero");
  }
};

const calcular = (n1, n2, operacion) => {
  const resultado = operacion(n1, n2);
  console.log("Resultado: " + resultado);
};

//calcular(10, 2, sumar);
//calcular(10, 20, restar);
//calcular(2, 8, multiplicar);
//calcular(10, 5, dividir);
console.log(10/0);

const calcularLuego = (n1, n2, tMs, operacion) => {
  setTimeout(
    function () {
      const resultado = operacion(n1, n2);
      console.log("Resultado: " + resultado);
    },
    tMs
    //tiempo en milisegundos
  );
};

//calcularLuego(10, 2, 10000, sumar);
//calcularLuego(10, 20, 5000, restar);
//calcularLuego(2, 8, 3000, multiplicar);
//calcularLuego(0, 0, 1000, dividir);

const calcularConCallback = (n1, n2, tMs, cbExito, cbFracaso, operacion) => {
  setTimeout(
    function () {
      operacion(n1, n2, cbExito, cbFracaso);
    },
    tMs
    //tiempo en milisegundos
  );
};

const exito = (resultado) => console.log("Resultado: " + resultado);
const fracaso = (error) => console.log("Error: " + error);

calcularConCallback(10, 0, 10000, exito, fracaso, dividir);
calcularConCallback(10, 20, 5000, exito, fracaso, dividir);
calcularConCallback(2, 8, 3000, exito, fracaso, dividir);
calcularConCallback(0, 0, 1000, exito, fracaso, dividir);