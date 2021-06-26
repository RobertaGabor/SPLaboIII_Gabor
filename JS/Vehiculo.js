"use strict";
var Vehiculo = /** @class */ (function () {
    function Vehiculo(id, marca, modelo, precio) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    Vehiculo.VehiculoToString = function (car) {
        return '"id"' + ":" + '"' + car.id + '"' + ',"marca"' + ":" + '"' + car.marca + '"' + ',"modelo"' + ":" + '"' + car.modelo + '"' + ',"precio"' + ":" + '"' + car.precio + '"';
    };
    Vehiculo.Mostrar = function (id, marca, modelo, precio, cuatro, ruedas) {
        var cuerpo = Manejador.$("tcuerpo");
        var row = document.createElement("tr");
        cuerpo.appendChild(row);
        var tdId = document.createElement("td");
        row.appendChild(tdId);
        var textoId = document.createTextNode(String(id));
        tdId.appendChild(textoId);
        tdId.appendChild(textoId);
        tdId.className = "PRIMARY";
        var tdMarca = document.createElement("td");
        row.appendChild(tdMarca);
        var textoMarca = document.createTextNode(marca);
        tdMarca.appendChild(textoMarca);
        var tdModelo = document.createElement("td");
        row.appendChild(tdModelo);
        var textoModleo = document.createTextNode(modelo);
        tdModelo.appendChild(textoModleo);
        var tdprecio = document.createElement("td");
        row.appendChild(tdprecio);
        var textoCarnet = document.createTextNode(String(precio));
        var tdcuatro = document.createElement("td");
        row.appendChild(tdcuatro);
        if (ruedas != undefined) {
            var textocuatro = document.createTextNode(String(cuatro));
        }
        else {
            var textocuatro = document.createTextNode(String(false));
        }
        tdcuatro.appendChild(textocuatro);
        var tdRuedas = document.createElement("td");
        row.appendChild(tdRuedas);
        if (ruedas != undefined) {
            var textoRuedas = document.createTextNode(String(ruedas));
        }
        else {
            var textoRuedas = document.createTextNode(String(0));
        }
        tdRuedas.appendChild(textoRuedas);
        var tdBorrar = document.createElement("td");
        row.appendChild(tdBorrar);
        var ancla = document.createElement("a");
        tdBorrar.appendChild(ancla);
        ancla.setAttribute("href", "#");
        var textoBorrar = document.createTextNode("ELIMINAR");
        ancla.appendChild(textoBorrar);
        ancla.addEventListener("click", Vehiculo.EliminarVehiculo);
    };
    Vehiculo.EliminarVehiculo = function (ev) {
        var _a;
        var btn = ev.target;
        // Manejador.$("tcuerpo").removeChild(btn.parentNode.parentNode);
        alert("es eliminao");
        var dni = (_a = (btn.parentElement.parentElement.querySelector(".PRIMARY"))) === null || _a === void 0 ? void 0 : _a.innerHTML;
        Manejador.eliminarCiudadanos(dni);
    };
    Vehiculo.limpiarTabla = function () {
        var elmtTable = document.getElementById('tcuerpo');
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;
        for (var x = rowCount - 1; x > -1; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    };
    return Vehiculo;
}());
