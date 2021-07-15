class Auto extends Vehiculo
{

    constructor(id:number,marca:string,modelo:string,precio:number,puertas:string)
    {
        super(id,marca,modelo,precio,puertas);

    }

    static AutoToString(car:Auto)
    {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cantPuertas"'+":" + '"'+car.cantPuertas + '"' + "}";
    }

    public static AgregarAuto(id:number,marca:HTMLInputElement,modelo:HTMLInputElement,precio:HTMLInputElement,puertas:HTMLInputElement):void{
        
        var car:Auto= new Auto(id,marca.value,modelo.value,Number(precio.value),puertas.value + " puertas");
        Vehiculo.cargarVehiculos(car);
        alert("Auto agregado con exito!"); 
 
    }
}