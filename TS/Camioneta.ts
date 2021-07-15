class Camioneta extends Vehiculo
{

    constructor(id:number,marca:string,modelo:string,precio:number,cuatro:string)
    {
        super(id,marca,modelo,precio,cuatro);
    }

    static CamionetaToJson(car:Camioneta)
    {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cuatroXCuatro"'+":" + '"'+car.cuatroXCuatro + '"' + "}";
    }

    public static AgregarCamioneta(id:number,marca:HTMLInputElement,modelo:HTMLInputElement,precio:HTMLInputElement,cuatro:HTMLInputElement):void{

        var truck:Camioneta= new Camioneta(id,marca.value,modelo.value,Number(precio.value),cuatro.options[cuatro.selectedIndex].value + " es 4x4");
            Vehiculo.cargarVehiculos(truck);
            alert("Camioneta agregada con exito!"); 
 
    }
 

}