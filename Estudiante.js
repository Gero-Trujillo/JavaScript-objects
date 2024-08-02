const Persona = require('./Persona.js')

class Estudiante extends Persona {
    constructor(nombre, edad, fecNacimiento){
        super(nombre, edad, fecNacimiento);
    }
}