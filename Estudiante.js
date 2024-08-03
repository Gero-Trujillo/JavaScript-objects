const Persona = require("./Persona.js");

class Estudiante extends Persona {
  constructor(nombre, edad, fecNacimiento, grado) {
    super(nombre, edad, fecNacimiento);
    this.grado = grado;
    if (this.realizarTarea === undefined) {
      throw new Error("Debe implementar el método realizarTarea");
    }
  }
  realizarTarea() {
    console.log("Realizando tarea escolar")
  }
  toString() {
    return `${super.toString()}, Grado: ${this.grado}`;
  }
}

const estudiante = new Estudiante("Juan", 20, "2000-01-01", "3ro");
console.log(estudiante.toString());
estudiante.realizarTarea();
