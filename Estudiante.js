const Persona = require('./Persona.js')

class Estudiante extends Persona {
    #grado = "";
    constructor(nombre, edad, fecNacimiento, grado){
        super(nombre, edad, fecNacimiento);
        this.#grado = grado;
    }
}