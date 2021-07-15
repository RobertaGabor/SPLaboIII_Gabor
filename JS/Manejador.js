"use strict";
var Manejador = /** @class */ (function () {
    function Manejador() {
    }
    //id autoincremental
    Manejador.prototype.handleEvent = function (ev) {
        var mar = Manejador.$("InMa");
        var mod = Manejador.$("InMo");
        var pre = Manejador.$("InP");
        var tipo = Manejador.$("InT");
        var bton = ev.target;
        var cuadro = Manejador.$("grilla");
        switch (bton.id) {
            case "altaV":
                cuadro.hidden = false;
                tipo.addEventListener("change", Manejador.mostrarAdicional);
                break;
            case "closed":
                cuadro.hidden = true;
                break;
            case "Adding":
                if (tipo.options[tipo.selectedIndex].text == "Auto") {
                    var puertas;
                    puertas = Manejador.$("InR");
                    Auto.AgregarAuto(1, mar, mod, pre, puertas);
                }
                else {
                    var cuatro;
                    cuatro = Manejador.$("es4x4");
                    Camioneta.AgregarCamioneta(1, mar, mod, pre, cuatro);
                }
                //Manejador.CrearVehiculo
                break;
            case "calcP":
                break;
        }
    };
    Manejador.mostrarAdicional = function (ev) {
        var btn = ev.target;
        var nombre = btn.options[btn.selectedIndex].text;
        var auto = Manejador.$("AuxiliarAuto");
        var camioneta = Manejador.$("AuxiliarCamioneta");
        if (nombre == "Auto") {
            camioneta.hidden = true;
            auto.hidden = false;
        }
        else {
            auto.hidden = true;
            camioneta.hidden = false;
        }
    };
    Manejador.$ = function (ide) {
        return document.getElementById(ide);
    };
    return Manejador;
}());
window.addEventListener("load", function () {
    //localStorage.clear();
    var stage = new Manejador();
    var btnADD = document.getElementById("altaV");
    btnADD.addEventListener("click", stage);
    var btnPromedio = document.getElementById("calcP");
    btnPromedio.addEventListener("click", stage);
    var btnAceptar = document.getElementById("Adding");
    btnAceptar.addEventListener("click", stage);
    var btnCerrar = document.getElementById("closed");
    btnCerrar.addEventListener("click", stage);
});
