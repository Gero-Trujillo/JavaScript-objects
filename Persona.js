class Persona {
  #nombre = "";
  #edad = "";
  #fecNacimiento = "";
  constructor(nombre, edad, fecNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#fecNacimiento = fecNacimiento;
  }

  establecerNombre(nombre){
    this.#nombre = nombre;
  }
  obtenerNombre(){
    return this.#nombre;
  }

  establecerEdad(edad){
    this.#edad = edad;
  }
  obtenerEdad(){
    return this.#edad;
  }

  establecerFecNacimiento(fecNacimiento){
    this.#fecNacimiento = fecNacimiento;
  }
  obtenerFecNacimiento(){
    return this.#fecNacimiento;
  }
}
