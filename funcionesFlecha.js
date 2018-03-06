"use strict";
//funcion normal
let myFuncion = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//funcion flecha
let myFuncionFlecha = (nombre) => {
    return nombre.toUpperCase;
};
// el gran beneficio se base en que el this hace contexto en la funcion asi este dentro de otra, por ejemplo
// si dentro de un setTimeout this va apuntar al objeto window, pero en una funcion flecha lo hara 
// apuntando a la funcion en contexto
let nombreX = "Jaimito";
let hulk = {
    nombreX: "bruce",
    smash() {
        setTimeout(() => console.log(`${this.nombreX} esta golpeando`), 1500);
    }
};
hulk.smash();
