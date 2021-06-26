"use strict";
var Manejador = /** @class */ (function () {
    function Manejador() {
    }
    //id autoincremental
    Manejador.prototype.handleEvent = function (ev) {
        var mar = Manejador.$("InMa");
        var mod = Manejador.$("InMo");
        var pre = Manejador.$("InP");
        var cuatro = Manejador.$("es4x4");
        var bton = ev.target;
        if (bton.id == "altaV") {
            var cuadro = Manejador.$("grilla");
            cuadro.hidden = false;
            var closed = Manejador.$("closed");
            closed === null || closed === void 0 ? void 0 : closed.onclick = function () {
                cuadro.hidden = true;
            };
            var btnVehiculo = Manejador.$("InT");
            btnVehiculo.addEventListener("change", Manejador.mostrarAdicional);
            var adding = Manejador.$("Adding");
            adding.addEventListener("click", Manejador.CrearVehiculo);
            //closed?.onclick=
        }
        else {
            if (bton.id == "calcP") {
            }
            else {
            }
        }
    };
    Manejador.CrearVehiculo = function (marca, modelo, precio, cuatro) {
        var btn = Manejador.$("InT");
        var nombre = btn.options[btn.selectedIndex].text;
        if (nombre == "Camioneta") {
            Camioneta.AgregarCamioneta(marca, modelo, precio, cuatro);
        }
        else {
        }
    };
    Manejador.mostrarAdicional = function (ev) {
        var btn = ev.target;
        var nombre = btn.options[btn.selectedIndex].text;
        var auto = Manejador.$("AuxiliarAuto");
        var camioneta = Manejador.$("AuxiliarCamioneta");
        if (nombre == "Auto") {
            camioneta === null || camioneta === void 0 ? void 0 : camioneta.hidden = true;
            auto === null || auto === void 0 ? void 0 : auto.hidden = false;
        }
        else {
            auto === null || auto === void 0 ? void 0 : auto.hidden = true;
            camioneta === null || camioneta === void 0 ? void 0 : camioneta.hidden = false;
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
});
