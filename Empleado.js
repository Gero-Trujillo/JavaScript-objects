class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
}

class Gerente extends Empleado{
    constructor(nombre, salario, bono){
        super(nombre, salario);
        this.bono = bono;
    }
    calcularSalario(){
        return this.salario + this.bono;
    }
}

class Vendedor extends Empleado{
    constructor(nombre, salario, comision){
        super(nombre, salario);
        this.comision = comision;
    }
    calcularSalario(){
        return this.salario + this.comision;
    }
}

class Mensajero extends Empleado{
    constructor(nombre, salario, subsidio){
        super(nombre, salario);
        this.subsidio = subsidio;
    }
}