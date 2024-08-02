class Persona {
  #nombre = "";
  #edad = "";
  #fecNacimiento = "";
  constructor(nombre, edad, fecNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#fecNacimiento = fecNacimiento;
  }

  establecerNombre(nombre) {
    if (typeof nombre !== "string") {
      console.error("El nombre debe ser un texto");
      return;
    }
    if (nombre === "") {
      console.error("El nombre no puede estar vacío");
      return;
    }
    this.#nombre = nombre;
  }
  obtenerNombre() {
    if (this.#nombre === ""){
        console.error("El nombre no puede estar vacío");
        return
    }
        return this.#nombre;
  }

  establecerEdad(edad) {
    if(edad.typeof !== "number") {
      console.error("La edad debe ser un número");
      return
    }
    if (edad < 0) {
      console.error("La edad no puede ser menor a 0");
      return;
    }
    this.#edad = edad;
  }
  obtenerEdad() {
    if (this.#edad < 0) {
      console.error("La edad no puede ser menor a 0");
        return;
    }
    return this.#edad;
  }

  establecerFecNacimiento(fecNacimiento) {
    if (typeof fecNacimiento !== "string") {
      console.error("La fecha de nacimiento debe ser un texto");
      return;
    }
    if (fecNacimiento === "") {
      console.error("La fecha de nacimiento no puede estar vacía");
      return;
    }
    this.#fecNacimiento = fecNacimiento;
  }
  obtenerFecNacimiento() {
    if (this.#fecNacimiento === ""){
        console.error("La fecha de nacimiento no puede estar vacía");
        return
    }
    return this.#fecNacimiento;
  }
  calcularFecNacimiento() {
    if (this.#fecNacimiento === ""){
        console.error("La fecha de nacimiento no puede estar vacía");
        return
    }
    let fechaNacimiento = new Date(this.#fecNacimiento);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
        fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }
}
