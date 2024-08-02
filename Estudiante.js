const Persona = require("./Persona.js");


class Estudiante extends Persona {
  #grado = "";
  constructor(nombre, edad, fecNacimiento, grado) {
    super(nombre, edad, fecNacimiento);
    this.#grado = grado;
  }
  toString() {
    return `${super.toString()}, Grado: ${this.#grado}`;
  }
}

const estudiante = new Estudiante("Juan", 20, "2000-01-01", "3ro");
console.log(estudiante.toString());
