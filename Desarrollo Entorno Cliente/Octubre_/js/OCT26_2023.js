//ejercico 1

function adivinaNumero(){

    let numero= 1;
    let x = Math.floor(Math.random() * 100) + 1;
    let contador=0;
    while(numero!= x){
        if(Number.isInteger(numero)){
            numero= parseInt(prompt("ingrese numero"));
            if(numero != 0){
                if(numero > x){
                alert("El numero indicado es mayor al numero por adivinar");
                contador+=1;
                }else if(numero<x){
                    alert("El numero indicado es menor al numero por adivinar");
                    contador+=1;
                }else if(numero==x){
                    contador+=1;
                    alert("Adivinaste en "+ contador +  " intentos");
                }
            }else{
                alert("¡¡¡¡¡ GAME OVER !!!!!");
                break;
            } 

        }else{
            alert("INVALIDO");
            numero= parseInt(prompt("ingrese numero"));
        }
        
    }
    
}




function encontrarPrimerDeEneroMiercoles() {
    let yearInici = parseInt(prompt("Introduce el primer año del rango"));
    let yearFin = parseInt(prompt("Introduce el último año del rango"));

    if (yearInici >= 2000 && yearFin <= 2050) {
        for (var year = yearInici; year <= yearFin; year++) {
            var fecha = new Date(year, 0, 1);
            if (fecha.getDay() === 3) {
                alert("El primer 1 de enero que fue un miércoles fue en el año " + year);
                return;
            }
        }
        alert("No se encontró ningún año en el rango especificado.");
    } else {
        alert("RANGO INVÁLIDO");
    }
}





function fiveVocals(){
    let palabra = prompt("Introduce una palabra:");
    if (!palabra) {
        alert("No has ingresado una palabra.");
        return;
    }
    let vocalesEncontradas = palabra.match(/[aAeEiIoOuU]/g);

    if (vocalesEncontradas && new Set(vocalesEncontradas).size === 5) {
        alert("La palabra es pentavocal.");
    } else {
        alert("La palabra no es pentavocal.");
    }
}

