export class Empleados {
    constructor(_id='',nombre='',oficina='',puesto='',salario=0){
        this._id = _id;
        this.nombre = nombre;
        this.oficina  = oficina;
        this.puesto = puesto;
        this.salario= salario;
    }
    _id: string;
    nombre:string;
    oficina:string;
    puesto:string;
    salario:Number;
}