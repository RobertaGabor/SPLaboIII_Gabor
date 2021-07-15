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
                
                if(tipo.options[tipo.selectedIndex].text=="Auto")
                {
                    var puertas:HTMLInputElement;
                    puertas=Manejador.$("InR");
                    Auto.AgregarAuto(1,mar,mod,pre,puertas)
                }
                else
                {
                    var cuatro:HTMLInputElement;
                    cuatro=Manejador.$("es4x4");
                    Camioneta.AgregarCamioneta(1,mar,mod,pre,cuatro)
                }
                //Manejador.CrearVehiculo
                break;
            case "calcP":
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


    public static $(ide:string):HTMLElement|null
    {
        return document.getElementById(ide);
    }
}



window.addEventListener("load",()=>
{
    
    //localStorage.clear();

    let stage:EventListenerObject= new Manejador();
    
    let btnADD = <HTMLElement>document.getElementById("altaV");
    btnADD.addEventListener("click",stage);

    let btnPromedio = <HTMLElement>document.getElementById("calcP");
    btnPromedio.addEventListener("click",stage);

    
    let btnAceptar = <HTMLElement>document.getElementById("Adding");
    btnAceptar.addEventListener("click",stage);

    
    let btnCerrar = <HTMLElement>document.getElementById("closed");
    btnCerrar.addEventListener("click",stage);

   
});