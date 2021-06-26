class Manejador implements EventListenerObject 
{
    //id autoincremental
    



    public handleEvent(ev:Event):void
    {
        var mar=Manejador.$("InMa");
        var mod=Manejador.$("InMo");
        var pre=Manejador.$("InP");
        var cuatro=Manejador.$("es4x4");

        let bton:HTMLElement=<HTMLElement>ev.target
        if(bton.id=="altaV")
        {
            var cuadro:HTMLElement=Manejador.$("grilla");
            cuadro.hidden=false;

            var closed:HTMLElement=Manejador.$("closed");
           closed?.onclick=function(){
            cuadro.hidden=true;}
            
            var btnVehiculo:HTMLElement = Manejador.$("InT");
            btnVehiculo.addEventListener("change",Manejador.mostrarAdicional);
            
            var adding:HTMLElement=Manejador.$("Adding");
            adding.addEventListener("click",Manejador.CrearVehiculo)
            //closed?.onclick=
           
        }
        else
        {
            if(bton.id=="calcP")
            {

            }
            else
            {

            }
        }
    }

    public static CrearVehiculo(marca:string,modelo:string,precio:number,cuatro:boolean)
    {
        var btn=Manejador.$("InT");
        var nombre=btn.options[btn.selectedIndex].text;
        if(nombre=="Camioneta")
        {
            Camioneta.AgregarCamioneta(marca,modelo,precio,cuatro);
        }
        else
        {
            
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
            camioneta?.hidden=true; 
            auto?.hidden=false;
        }
        else
        {
            auto?.hidden=true;
            camioneta?.hidden=false;          
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

   
});