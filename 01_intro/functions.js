const ironman = {
  nombre: "tony",
  edad: 40,
  poder: "tecnología"
}

const hulk = {
  nombre: "bruce",
  edad: 40,
  poder: "fuerza"
}

const capitanAmerica = {
  nombre: "steve",
  edad: 100,
  poder: "fuerza"
}

const viudaNegra = {
  nombre: "natasha",
  edad: 35,
  poder: "agilidad"
}

const wanda = {
  nombre: "wanda",
  edad: 30,
  poder: "magia del caos"
}

//imprimirNombre(ironman)
const imprimirNombre = (personaje)=> console.log(`el nombre del superheroe es ${personaje.nombre}`);
//imprimirNombre(hulk)
//imprimirNombre(wanda)

const imprimirTodosLosNombres = (arrayDePersonajes) => {
  //console.log(arrayDePersonajes);  
  for (let personaje of arrayDePersonajes) {
    //console.log(personaje);    
    imprimirNombre(personaje)
  }
  arrayDePersonajes.forEach(element => imprimirNombre(element));
}

imprimirTodosLosNombres([ironman,hulk,capitanAmerica])
imprimirTodosLosNombres([wanda,viudaNegra])