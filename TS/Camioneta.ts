class Camioneta extends Vehiculo
{
    cuatroXCuatro:boolean;
    constructor(id:number,marca:string,modelo:string,precio:number,cuatro:boolean)
    {
        super(id,marca,modelo,precio);
        this.cuatroXCuatro=cuatro;
    }

    static CamionetaToJson(car:Camioneta)
    {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cuatroXCuatro"'+":" + '"'+car.cuatroXCuatro + '"' + "}";
    }

    static AgregarCamioneta(marca:HTMLElement,modelo:HTMLElement,precio:HTMLElement,cuatro:HTMLElement):void{

        var truck:Camioneta= new Camioneta(0,marca.value,modelo.value,precio.value,cuatro.value);
        //set en local ustiore un array de CITIZEN CON TODOS
        //var citizenJSON=Ciudadano.CiudadanoToJSON(citizen);

            Camioneta.cargarCamioneta(truck);
            alert("Ciudadano agregado con exito!");
 
       
 
    }
    public static cargarCamioneta(cami?:Camioneta)
    {
        //load
        var Cam:Array<Camioneta>;
        Cam=[]; //INICIALIZAR
        var lastID:number;
        if(localStorage.length>0)
        {
            Cam=JSON.parse(localStorage.getItem("Vehiculos"));
            lastID=Cam[Cam.length].id;
        }
        else
        {
            cami
            lastID=1;
        }

        if(cami!=undefined)
        {
            cami.id=lastID;
            Cam.push(cami);
            Camioneta.limpiarTabla();
            //limpiar tabla
        }
     
        localStorage.setItem("Vehiculos",JSON.stringify(Cam)); 
        
        for(var i=0;i<Cam.length;i++)
        {
            Vehiculo.Mostrar(Cam[i].id,Cam[i].marca,Cam[i].modelo,Cam[i].precio,Cam[i].cuatroXCuatro)
        }

        //load
    }
    public static eliminarCamioneta(dni:string)
    {
        var Cam:Array<Vehiculo>;
        Cam=[]; //INICIALIZAR
        var dniN=Number(dni);
        Cam=JSON.parse(localStorage.getItem("Vehiculos"));
        for(var i=0;i<Cam.length;i++)
        {
            if(Cam[i].id==dniN)
            {
                Cam.splice(i,1);
            }
        }
        Vehiculo.limpiarTabla();
        localStorage.setItem("Vehiculos",JSON.stringify(Cam)); 
        for(var i=0;i<Cam.length;i++)
        {
            Vehiculo.Mostrar(Cam[i].id,Cam[i].marca,Cam[i].modelo,Cam[i].precio)
        }
    }
}