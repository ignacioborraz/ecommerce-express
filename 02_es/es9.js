/* DESESTRUCTURACION DE UN ARRAY */

const nombres = ["igna", "ana", "marcos", "maria", "juan"];
const [primerNombre] = nombres;
//const [nombreDelElementoAsacarDelArray] = arrayAdesestructurar
//console.log(primerNombre);
const [, , , , ultimoNombre] = nombres;
//console.log(ultimoNombre);

/* DESESTRUCTURACION DE UN OBJETO */

const clase = {
  nombre: "Backend",
  comision: 70260,
  alumnos: 60,
  nombres: nombres,
  turno: "noche",
  año: 2024
  //nombres,    //con la estructuracion
};
const { nombre } = clase;
//console.log(nombre);
const { comision, alumnos } = clase;
//console.log(comision);
//console.log(alumnos);

/* ESTRUCTURACION DE UN OBJETO */
const profe = "igna";
const edad = 34;
const comisionesAcargo = 4;
const datosProfe = { profe, edad, comisionesAcargo };
//console.log(datosProfe);

/* SPREAD OPERATOR */
const todoJunto = { ...datosProfe, ...clase }
//console.log(todoJunto);
const masNombres = ["pedro", "juli", ...nombres]
console.log(masNombres);

/* REST OPERATOR */
const { turno, ...restoDatos } = todoJunto
//console.log(turno);
//console.log(restoDatos);
const [primero, ...restoNombres ] = nombres
//console.log(primero);
//console.log(restoNombres);

