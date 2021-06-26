"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(id, marca, modelo, precio, cuatro) {
        var _this = _super.call(this, id, marca, modelo, precio) || this;
        _this.cuatroXCuatro = cuatro;
        return _this;
    }
    Camioneta.CamionetaToJson = function (car) {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cuatroXCuatro"' + ":" + '"' + car.cuatroXCuatro + '"' + "}";
    };
    Camioneta.AgregarCamioneta = function (marca, modelo, precio, cuatro) {
        var truck = new Camioneta(0, marca.value, modelo.value, precio.value, cuatro.value);
        //set en local ustiore un array de CITIZEN CON TODOS
        //var citizenJSON=Ciudadano.CiudadanoToJSON(citizen);
        Camioneta.cargarCamioneta(truck);
        alert("Ciudadano agregado con exito!");
    };
    Camioneta.cargarCamioneta = function (cami) {
        //load
        var Cam;
        Cam = []; //INICIALIZAR
        var lastID;
        if (localStorage.length > 0) {
            Cam = JSON.parse(localStorage.getItem("Vehiculos"));
            lastID = Cam[Cam.length].id;
        }
        else {
            cami;
            lastID = 1;
        }
        if (cami != undefined) {
            cami.id = lastID;
            Cam.push(cami);
            Camioneta.limpiarTabla();
            //limpiar tabla
        }
        localStorage.setItem("Vehiculos", JSON.stringify(Cam));
        for (var i = 0; i < Cam.length; i++) {
            Vehiculo.Mostrar(Cam[i].id, Cam[i].marca, Cam[i].modelo, Cam[i].precio, Cam[i].cuatroXCuatro);
        }
        //load
    };
    Camioneta.eliminarCamioneta = function (dni) {
        var Cam;
        Cam = []; //INICIALIZAR
        var dniN = Number(dni);
        Cam = JSON.parse(localStorage.getItem("Vehiculos"));
        for (var i = 0; i < Cam.length; i++) {
            if (Cam[i].id == dniN) {
                Cam.splice(i, 1);
            }
        }
        Vehiculo.limpiarTabla();
        localStorage.setItem("Vehiculos", JSON.stringify(Cam));
        for (var i = 0; i < Cam.length; i++) {
            Vehiculo.Mostrar(Cam[i].id, Cam[i].marca, Cam[i].modelo, Cam[i].precio);
        }
    };
    return Camioneta;
}(Vehiculo));
