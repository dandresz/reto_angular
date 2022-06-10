export class tarea {
    public nombre: string
    public cumplido: boolean
    constructor(nombre: string, cumplido?: boolean) {
        this.cumplido = cumplido ? cumplido : false;
        this.nombre = nombre;
    }
}