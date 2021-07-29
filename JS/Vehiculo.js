"use strict";
var Vehiculo = /** @class */ (function () {
    function Vehiculo(id, marca, modelo, precio, caracteristica) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.caracteristica = caracteristica;
    }
    Vehiculo.VehiculoToString = function (car) {
        return '"id"' + ":" + '"' + car.id + '"' + ',"marca"' + ":" + '"' + car.marca + '"' + ',"modelo"' + ":" + '"' + car.modelo + '"' + ',"precio"' + ":" + '"' + car.precio + '"';
    };
    Vehiculo.Mostrar = function (id, marca, modelo, precio, caracteristica) {
        var cuerpo = Manejador.$("tcuerpo");
        var row = document.createElement("tr");
        cuerpo === null || cuerpo === void 0 ? void 0 : cuerpo.appendChild(row);
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
        var textoPre = document.createTextNode(String(precio));
        tdprecio.appendChild(textoPre);
        var tdcar = document.createElement("td");
        row.appendChild(tdcar);
        var textocar = document.createTextNode(caracteristica);
        tdcar.appendChild(textocar);
        var tdBorrar = document.createElement("td");
        row.appendChild(tdBorrar);
        var ancla = document.createElement("a");
        tdBorrar.appendChild(ancla);
        ancla.setAttribute("href", "#");
        var textoBorrar = document.createTextNode("ELIMINAR");
        ancla.appendChild(textoBorrar);
        ancla.addEventListener("click", Vehiculo.EliminarVehiculo);
    };
    Vehiculo.cargarVehiculos = function (ve) {
        //load
        var lista;
        lista = []; //INICIALIZAR
        if (localStorage.length > 0) {
            lista = JSON.parse(localStorage.getItem("Vehiculos"));
        }
        if (ve != undefined) {
            lista.push(ve);
            Vehiculo.limpiarTabla();
            //limpiar tabla
        }
        localStorage.setItem("Vehiculos", JSON.stringify(lista));
        for (var i = 0; i < lista.length; i++) {
            Vehiculo.Mostrar(lista[i].id, lista[i].marca, lista[i].modelo, lista[i].precio, lista[i].caracteristica);
        }
    };
    Vehiculo.EliminarVehiculo = function (ev) {
        var btn = ev.target;
        var vehiculoE = btn.parentNode.parentNode;
        var lista;
        var idSelect;
        //eliminarlo del localS
        idSelect = vehiculoE.querySelector(".PRIMARY").innerHTML;
        lista = Vehiculo.traerLista();
        lista = lista.filter(function (elemento) { return elemento.id != idSelect; });
        localStorage.clear();
        localStorage.setItem("Vehiculos", JSON.stringify(lista));
        Manejador.$("tcuerpo").removeChild(vehiculoE);
        alert("Se ha eliminado con exito!");
        //     var dni:string=((<HTMLElement>(<HTMLElement>(<HTMLElement>btn).parentElement).parentElement).querySelector(".PRIMARY"))?.innerHTML;
        //     var btn=Manejador.$("InT");
        //     var nombre=btn.options[btn.selectedIndex].text;
        //     if(nombre=="Auto")
        //     {
        //     }
    };
    Vehiculo.traerLista = function () {
        var lista;
        lista = []; //INICIALIZAR
        if (localStorage.length > 0) {
            lista = JSON.parse(localStorage.getItem("Vehiculos"));
        }
        return lista;
    };
    Vehiculo.cargarPagina = function (lista) {
        if (lista == undefined) {
            var lista;
            lista = []; //INICIALIZAR  
            if (localStorage.length > 0) {
                lista = JSON.parse(localStorage.getItem("Vehiculos"));
            }
        }
        for (var i = 0; i < lista.length; i++) {
            Vehiculo.Mostrar(lista[i].id, lista[i].marca, lista[i].modelo, lista[i].precio, lista[i].caracteristica);
        }
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
