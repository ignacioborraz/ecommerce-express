class Persona {
  //propiedades
  //estaticas (de la clase)
  static cantidadDePersonas = 0;
  //comunes (de la instancia)
  nombre = "";
  edad = 0;
  ciudad = "";
  vida = 0;
  //metodo constructor (el que crea el objeto con las propiedades y valores definidos)
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
    Persona.cantidadDePersonas++
  }
  comer = (cantidad) => {
    if (this.vida + cantidad >= 150) {
      this.vida = 150;
      console.log("No podes comer mas!");
    } else {
      this.vida = this.vida + cantidad;
    }
  };
  entrenar = (cantidad) => {
    if (this.vida - cantidad <= 50) {
      this.vida = 50;
      console.log("No podes entrenar mas!");
    } else {
      this.vida = this.vida - cantidad;
    }
  };
  mudarse = () => {
    this.vida = this.vida - 20;
  };
}

console.log(Persona.cantidadDePersonas)
const persona1 = new Persona("Juan", 30, "CABA", 100);
console.log(Persona.cantidadDePersonas)
//console.log(persona1);
const persona2 = new Persona("Ana", 32, "Mendoza", 100);
console.log(Persona.cantidadDePersonas)
//console.log(persona2);
const persona3 = new Persona("Teo", 25, "Tucuman", 100);
console.log(Persona.cantidadDePersonas)
persona3.comer(20);
persona3.entrenar(40);
persona3.comer(50);
persona3.entrenar(40);
persona3.comer(10);
persona3.entrenar(40);
persona3.mudarse();
//console.log(persona3);
