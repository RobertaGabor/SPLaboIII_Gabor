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
        return _super.call(this, id, marca, modelo, precio, cuatro) || this;
    }
    Camioneta.CamionetaToJson = function (car) {
        return "{" + Vehiculo.VehiculoToString(car) + ',"cuatroXCuatro"' + ":" + '"' + car.cuatroXCuatro + '"' + "}";
    };
    Camioneta.AgregarCamioneta = function (id, marca, modelo, precio, cuatro) {
        var truck = new Camioneta(id, marca.value, modelo.value, Number(precio.value), cuatro.options[cuatro.selectedIndex].value + " es 4x4");
        Vehiculo.cargarVehiculos(truck);
        alert("Camioneta agregada con exito!");
    };
    return Camioneta;
}(Vehiculo));
