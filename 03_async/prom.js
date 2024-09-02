const dividir = (n1, n2) => {
  const resultado = new Promise((resolve, reject) => {
    //las cbs pueden tener cualquier nombre PERO
    //la primera cb es para resolver (exito)
    //la segunda cb es para fracasar (rechazo)
    if (n2 !== 0) {
      resolve(n1 / n2);
    } else {
      reject("No se puede dividir por cero");
    }
  });
  return resultado;
};

const calcularConPromise = (n1, n2, tMs, operacion) => {
  setTimeout(
    function () {
      operacion(n1, n2)
        .then((res) => console.log("Resultado: " + res))
        .catch((error) => console.log("Error: " + error));
    },
    tMs
    //tiempo en milisegundos
  );
};

//const exito = (resultado) => console.log("Resultado: " + resultado);
//const fracaso = (error) => console.log("Error: " + error);

calcularConPromise(10, 0, 10000, dividir);
calcularConPromise(10, 20, 5000, dividir);
calcularConPromise(2, 8, 3000, dividir);
calcularConPromise(0, 0, 1000, dividir);
