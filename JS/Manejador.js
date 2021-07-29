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
                //id
                var idList = Vehiculo.traerLista();
                var ultimo;
                var idNuevo = 0;
                if (idList.length > 0) {
                    ultimo = idList.reduce(function (a, b) {
                        if (a.id >= b.id)
                            return a;
                        else if (a.id <= b.id)
                            return b;
                    });
                    idNuevo = ultimo.id + 1;
                }
                else {
                    idNuevo = 1;
                }
                if (tipo.options[tipo.selectedIndex].text == "Auto") {
                    var puertas;
                    puertas = Manejador.$("InR");
                    Auto.AgregarAuto(idNuevo, mar, mod, pre, puertas);
                }
                else {
                    var cuatro;
                    cuatro = Manejador.$("es4x4");
                    Camioneta.AgregarCamioneta(idNuevo, mar, mod, pre, cuatro);
                }
                //Manejador.CrearVehiculo
                break;
            case "calcP":
                var lista = Vehiculo.traerLista();
                var suma = lista.reduce(function (a, b) {
                    return a + b.precio;
                }, 0);
                if (lista.length > 0) {
                    Manejador.$("promedio").value = (suma / lista.length).toString();
                }
                break;
            case "filtros":
                var filtrado = bton.options[bton.selectedIndex].text;
                if (filtrado == "Auto") {
                    var autos = Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    var autosfiltrados = autos.filter(function (autito) { return autito.caracteristica.match("puertas"); });
                    Vehiculo.cargarPagina(autosfiltrados);
                }
                else if (filtrado == "Camioneta") {
                    var camion = Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    var cmfiltrados = camion.filter(function (cm) { return cm.caracteristica.match("4x4"); });
                    Vehiculo.cargarPagina(cmfiltrados);
                }
                else {
                    var todos = Vehiculo.traerLista();
                    Vehiculo.limpiarTabla();
                    Vehiculo.cargarPagina(todos);
                }
                break;
            case "idV":
                if (Manejador.$("idV").checked == true) {
                    Manejador.filtercolumnShow(0);
                }
                else {
                    Manejador.filtercolumnHide(0);
                }
                break;
            case "modeloV":
                if (Manejador.$("modeloV").checked == true) {
                    Manejador.filtercolumnShow(2);
                }
                else {
                    Manejador.filtercolumnHide(2);
                }
                break;
            case "marcaV":
                if (Manejador.$("marcaV").checked == true) {
                    Manejador.filtercolumnShow(1);
                }
                else {
                    Manejador.filtercolumnHide(1);
                }
                break;
            case "precioV":
                if (Manejador.$("modeloV").checked == true) {
                    Manejador.filtercolumnShow(3);
                }
                else {
                    Manejador.filtercolumnHide(3);
                }
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
    Manejador.filtercolumnHide = function (columna) {
        var _a, _b;
        var lista = Vehiculo.traerLista();
        var fila = (_a = Manejador.$("mitabla")) === null || _a === void 0 ? void 0 : _a.childNodes[1].childNodes[1];
        var celda = document.getElementsByTagName('th');
        celda[columna].style.display = "none";
        for (var i = 0; i < lista.length; i++) {
            (_b = Manejador.$("tcuerpo")) === null || _b === void 0 ? void 0 : _b.childNodes[i + 1].childNodes[columna].style.display = "none";
        }
    };
    Manejador.filtercolumnShow = function (columna) {
        var _a, _b;
        var lista = Vehiculo.traerLista();
        var fila = (_a = Manejador.$("mitabla")) === null || _a === void 0 ? void 0 : _a.childNodes[1].childNodes[1];
        var celda = document.getElementsByTagName('th');
        celda[columna].style.display = "table-cell";
        for (var i = 0; i < lista.length; i++) {
            (_b = Manejador.$("tcuerpo")) === null || _b === void 0 ? void 0 : _b.childNodes[i + 1].childNodes[columna].style.display = "table-cell";
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
    Vehiculo.cargarPagina();
    var btnADD = document.getElementById("altaV");
    btnADD.addEventListener("click", stage);
    var btnPromedio = document.getElementById("calcP");
    btnPromedio.addEventListener("click", stage);
    var btnAceptar = document.getElementById("Adding");
    btnAceptar.addEventListener("click", stage);
    var btnCerrar = document.getElementById("closed");
    btnCerrar.addEventListener("click", stage);
    var comboFiltro = document.getElementById("filtros");
    comboFiltro.addEventListener("change", stage);
    var idCB = document.getElementById("idV");
    idCB.addEventListener("change", stage);
    var marcaCB = document.getElementById("marcaV");
    marcaCB.addEventListener("change", stage);
    var modeloCB = document.getElementById("modeloV");
    modeloCB.addEventListener("change", stage);
    var precioCB = document.getElementById("precioV");
    precioCB.addEventListener("change", stage);
    //Math.max(...) xArray.reduce()
});
