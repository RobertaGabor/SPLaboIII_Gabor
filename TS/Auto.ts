class Auto extends Vehiculo
{
    cantPuertas:number;
    constructor(id:number,marca:string,modelo:string,precio:number,puertas:number)
    {
        super(id,marca,modelo,precio);
        this.cantPuertas=puertas;
    }

    static AutoToString(car:Auto)
    {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cantPuertas"'+":" + '"'+car.cantPuertas + '"' + "}";
    }
}