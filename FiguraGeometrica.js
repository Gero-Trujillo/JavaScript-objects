class FiguraGeometrica{
    #nombre = "";
    #color = "";
    constructor(nombre, color){
        this.#nombre = nombre;
        this.#color = color;
    }
    establecerNombre(nombre){
        if(typeof nombre !== "string"){
            console.error("El nombre debe ser un texto");
            return;
        }
        if(nombre === ""){
            console.error("El nombre no puede estar vacío");
            return;
        }
        this.#nombre = nombre;
    }
    obtenerNombre(){
        if(this.#nombre === ""){
            console.error("El nombre no puede estar vacío");
            return;
        }
        return this.#nombre;
    }
    establecerColor(color){
        if(typeof color !== "string"){
            console.error("El color debe ser un texto");
            return;
        }
        if(color === ""){
            console.error("El color no puede estar vacío");
            return;
        }
        this.#color = color;
    }
    obtenerColor(){
        if(this.#color === ""){
            console.error("El color no puede estar vacío");
            return;
        }
        return this.#color;
    }
}