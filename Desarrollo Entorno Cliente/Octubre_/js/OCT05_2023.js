//funciones de la sesion 5 del html
//pedir un numero al usuario i convertirlo a binario, octal, hexanumero
//utilizando bucles division y residuo

function escribe() {
    let numero = parseInt(prompt("Ingresa el numero"));
    convertirBinario(numero);
    convertirOctal(numero);
    convertirHexadecimal(numero);
}

function convertirBinario(numero) {
    let binario = "";
    let numBin = numero;

    while (numBin > 0) {
        binario = numBin % 2 + binario;
        numBin = Math.floor(numBin / 2);
    }
    console.log("Binario: " + binario);
}

function convertirOctal(numero) {
    let octal = "";
    let numOctal = numero;

    while (numOctal > 0) {
        octal = numOctal % 8 + octal;
        numOctal = Math.floor(numOctal / 8);
    }
    console.log("Octal: " + octal);
}

function convertirHexadecimal(numero) {
    let hexadecimal = "";
    let numHexa = numero;

    while (numHexa > 0) {
        let resto = numHexa % 16;
        if (resto < 10) {
            hexadecimal = resto + hexadecimal;
        } else {
            hexadecimal = String.fromCharCode(resto + 87) + hexadecimal; // A-F
        }
        numHexa = Math.floor(numHexa / 16);
    }
    console.log("Hexadecimal: " + hexadecimal);
}

    
//     let numeroEnBinario = numero.toString(2); // A la base 2
//     console.log("El " +numero +  " en binario es "+ numeroEnBinario);
// }

// function Octal(numero){
//     let numeroEnOctal = numero.toString(8); // A la base 2
//     console.log("El " + numero +  " en Octal es "+ numeroEnOctal);
// }

// function Hexadecimal(numero){
//     let numeroEnHexadecimal = numero.toString(16); // A la base 16
//     console.log("El " +numero +  " en HexaDecimal es "+ numeroEnHexadecimal );
// }
// /*Tratar de hacerlo sin la funcion ToString() */

