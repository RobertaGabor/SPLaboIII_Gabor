class Manejador implements EventListenerObject 
{
    //id autoincremental
    

    public handleEvent(ev:Event):void
    {

        var mar:HTMLInputElement=Manejador.$("InMa");
        var mod:HTMLInputElement=Manejador.$("InMo");
        var pre:HTMLInputElement=Manejador.$("InP");
        var tipo:HTMLInputElement=Manejador.$("InT");       
        let bton:HTMLElement=<HTMLElement>ev.target
        var cuadro:HTMLElement=Manejador.$("grilla");
        
        
        switch(bton.id)
        {
            case "altaV":
                cuadro.hidden=false;
                tipo.addEventListener("change",Manejador.mostrarAdicional);
               
                break;
            case "closed":
                cuadro.hidden=true;
                break;
            case "Adding":
                //id
                var idList=Vehiculo.traerLista();
                var ultimo:Vehiculo;
                var idNuevo:number=0;
                if(idList.length>0)
                {
                    ultimo=idList.reduce(function(a, b) {
                    if(a.id>=b.id) return a
                    else if (a.id<=b.id) return b
                    });
                    idNuevo=ultimo.id+1;
                }
                else
                {
                    idNuevo=1;
                }
                if(tipo.options[tipo.selectedIndex].text=="Auto")
                {
                    var puertas:HTMLInputElement;
                    puertas=Manejador.$("InR");
                    Auto.AgregarAuto(idNuevo,mar,mod,pre,puertas)
                }
                else
                {
                    var cuatro:HTMLInputElement;
                    cuatro=Manejador.$("es4x4");
                    Camioneta.AgregarCamioneta(idNuevo,mar,mod,pre,cuatro)
                }
                //Manejador.CrearVehiculo
                break;
            case "calcP":
                var lista:Array<Vehiculo>=Vehiculo.traerLista();
                
                var suma:number=lista.reduce(function(a,b){
                    return a+b.precio
                },0);
                if(lista.length>0)
                {
                    Manejador.$("promedio").value=(suma/lista.length).toString();
                }
                
                break;
            case "filtros":
                var filtrado=bton.options[bton.selectedIndex].text;
                if(filtrado=="Auto")
                {
                    var autos= Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    var autosfiltrados=autos.filter(autito => autito.caracteristica.match("puertas"))
                    Vehiculo.cargarPagina(autosfiltrados);
                    
                }
                else if(filtrado=="Camioneta")
                {
                    var camion= Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    var cmfiltrados=camion.filter(cm => cm.caracteristica.match("4x4"))
                    Vehiculo.cargarPagina(cmfiltrados);
                }
                else
                {
                    var todos = Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    Vehiculo.cargarPagina(todos);
                }
                break;
            case "idV":
                if(Manejador.$("idV").checked==true)
                {
                    Manejador.filtercolumnShow(0);
                }
                else
                {
                    Manejador.filtercolumnHide(0);
                }
                
                break;
            case "modeloV":
                if(Manejador.$("modeloV").checked==true)
                {
                    Manejador.filtercolumnShow(2);
                }
                else
                {
                    Manejador.filtercolumnHide(2);
                }
                
                break;
            case "marcaV":
                if(Manejador.$("marcaV").checked==true)
                {
                    Manejador.filtercolumnShow(1);
                }
                else
                {
                    Manejador.filtercolumnHide(1);
                }
                break;
            case "precioV":
                if(Manejador.$("modeloV").checked==true)
                {
                    Manejador.filtercolumnShow(3);
                }
                else
                {
                    Manejador.filtercolumnHide(3);
                }
                break;
        }
    }
    public static mostrarAdicional(ev:Event)
    {
        var btn=<HTMLElement>ev.target;
        var nombre=btn.options[btn.selectedIndex].text;
        var auto:HTMLElement=Manejador.$("AuxiliarAuto");
        var camioneta:HTMLElement=Manejador.$("AuxiliarCamioneta");
        if(nombre=="Auto")
        {
            camioneta.hidden=true; 
            auto.hidden=false;
        }
        else
        {
            auto.hidden=true;
            camioneta.hidden=false;          
        }
    }


    private static filtercolumnHide(columna:number)
    {

        var lista=Vehiculo.traerLista();
        var fila=Manejador.$("mitabla")?.childNodes[1].childNodes[1];
        var celda= document.getElementsByTagName('th');
        celda[columna].style.display="none";
        for(var i:number=0;i<lista.length;i++)
        {
            Manejador.$("tcuerpo")?.childNodes[i+1].childNodes[columna].style.display="none";
            
        } 
        
    }

    private static filtercolumnShow(columna:number)
    {

        var lista=Vehiculo.traerLista();
        var fila=Manejador.$("mitabla")?.childNodes[1].childNodes[1];
        var celda= document.getElementsByTagName('th');
        celda[columna].style.display="table-cell";

        for(var i:number=0;i<lista.length;i++)
        {
            Manejador.$("tcuerpo")?.childNodes[i+1].childNodes[columna].style.display="table-cell"
        } 
        
    }

    public static $(ide:string):HTMLElement|null
    {
        return document.getElementById(ide);
    }
}



window.addEventListener("load",()=>
{
    
    //localStorage.clear();

    let stage:EventListenerObject= new Manejador();
    
    Vehiculo.cargarPagina();
    let btnADD = <HTMLElement>document.getElementById("altaV");
    btnADD.addEventListener("click",stage);

    let btnPromedio = <HTMLElement>document.getElementById("calcP");
    btnPromedio.addEventListener("click",stage);

    
    let btnAceptar = <HTMLElement>document.getElementById("Adding");
    btnAceptar.addEventListener("click",stage);

    
    let btnCerrar = <HTMLElement>document.getElementById("closed");
    btnCerrar.addEventListener("click",stage);

    let comboFiltro = <HTMLElement>document.getElementById("filtros");
    comboFiltro.addEventListener("change",stage)

    
    let idCB = <HTMLElement>document.getElementById("idV");
    idCB.addEventListener("change",stage)

    let marcaCB = <HTMLElement>document.getElementById("marcaV");
    marcaCB.addEventListener("change",stage)

    let modeloCB = <HTMLElement>document.getElementById("modeloV");
    modeloCB.addEventListener("change",stage)

    let precioCB = <HTMLElement>document.getElementById("precioV");
    precioCB.addEventListener("change",stage)
    //Math.max(...) xArray.reduce()
});