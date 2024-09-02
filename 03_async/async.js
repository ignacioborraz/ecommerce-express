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

const calcularConAsync = (n1, n2, tMs, operacion) => {
  try {
    setTimeout(
      async function () {
        try {
          const respuesta = await operacion(n1, n2);
          console.log("Resultado: " + respuesta);
        } catch (error) {
          console.log("Error: " + error);
        }
        //.then((res) => console.log("Resultado: " + res))
        //.catch((error) => console.log("Error: " + error));
      },
      tMs
      //tiempo en milisegundos
    );
  } catch (error) {
    console.log("Error de catch Sincrono" + error);
  }
};

//const exito = (resultado) => console.log("Resultado: " + resultado);
//const fracaso = (error) => console.log("Error: " + error);

calcularConAsync(10, 0, 10000, dividir);
calcularConAsync(10, 20, 5000, dividir);
calcularConAsync(2, 8, 3000, dividir);
calcularConAsync(0, 0, 1000, dividir);
