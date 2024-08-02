class InterfaceTrabajador{
    constructor(){
        if(new.target === InterfaceTrabajador){
            throw new Error("No se puede instanciar una interfaz");
        }
        if(!realizarTarea){
            throw new Error("La interfaz debe tener el método realizarTarea");
        }
    }
}

module.exports = InterfaceTrabajador;