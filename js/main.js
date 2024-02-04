//Recolectando  datos distancia de carrera
let tiempocarrera = null;

while (tiempocarrera === null) {
    let carreraUsuario = prompt("Ingrese la duracion de carrera, en minutos, ej: 90");

    let parsedCarrera = parseInt(carreraUsuario);

    if (!isNaN(parsedCarrera)) {
        tiempocarrera = parsedCarrera;
    } else {
        alert("El valor ingresado no es valido");
    }
}

console.log("El tiempo de carrera es:", tiempocarrera); // control si es un numero



//Recolectando  datos tiempo por vuelta
let tiempovuelta = null;

while (tiempovuelta === null) {
    let vueltaUsuario = prompt("Ingrese el tiempo por vuelta en mm.seg, ej: 2.06");

    let parsedVuelta = vueltaUsuario;

    if (!isNaN(parsedVuelta)) {
        tiempovuelta = parsedVuelta;
    } else {
        alert("El valor ingresado no es valido");
    }
}

console.log("El tiempo por vuelta es:", tiempovuelta); // control si es un numero


// Recolectando consumo de combustible por vuelta

let consumoVuelta = null;

while (consumoVuelta === null) {
    let consumoUsuario = prompt("Ingrese el consumo por vuelta, ej: 3.24");

    let parsedConsumo = parseFloat(consumoUsuario);

    if (!isNaN(parsedConsumo)){
        consumoVuelta = parsedConsumo;
    } else{
        alert("El valor ingresado no es valido");
    }
}
console.log("El consumo por vuelta es:", consumoVuelta); // control si nos da un num


function convertircarrera (tiempocarrera) {
    let segCarrera = (tiempocarrera * 60);
    return segCarrera;
}

let segCarrera = convertircarrera(tiempocarrera); // conviertiendo tiempo por vuelta a segundos 

console.log(segCarrera);

function convertirVuelta(tiempovuelta) {
    let partes = tiempovuelta.split('.');
    if (partes.length < 2 || partes[1].length !== 2 || parseInt(partes[1]) >= 60) {
        alert("Introducir el tiempo en formato mm.ss");
        return null;
    }
    let minutos = partes.length > 1 ? parseInt(partes[0])*60:0;
    let segundos = parseInt(partes[partes.length - 1]);
    return minutos + segundos;
}

let segvuelta = convertirVuelta(tiempovuelta);
console.log(segvuelta);

function calculo() {
    let consumototal = ((tiempocarrera / tiempovuelta) * consumoVuelta) + (2 * consumoVuelta);
    return consumototal;
}

let consumocarrera = calculo();


alert("Usted necesita " + consumocarrera + " litros para completar su carrera");


