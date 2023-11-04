//ejercicio 1

function verifica(){
    let frase1= prompt("introduce la primera frase");
    let frase2= prompt("introduce la srgnuda frase");
    
    let countFirst=0;
    let countSec=0;
    for(let i=0; i<= frase1.length; i++){
        countFirst+=1;
    }
    for(let i=0; i<= frase2.length; i++){
        countSec+=1;
    }
    if(countFirst>countSec){
        document.write("La frase mas larga es: " + frase1 + " con una cantidad de:" + countFirst + " letras");
    }else{
        document.write("la frase mas larga es: " +  frase2 + " con una cantidad de: " + countFirst + " letras");
    }
}
// jeje 
function buscando(){
    let frase= prompt("Ingrese el texto");
    let letra= prompt("Ingrese la letra referida");
    
    let cont= 0;

    for(let i=0; i<= frase.length; i++){
        if(frase.charAt(i)== letra){
            cont++;
        }
    }
    if(cont>=2 && cont<=4){
        document.write("la palabara contiene:   " + cont + " de la letra seleccionada: " + letra);
    }else{
        document.write("Lo siento, la letra a buscar no esta disponible entre el rango presentado");
    }
}

function elimina(){//corregir el ejercicio
    let texto= prompt("Ingresa el texo");
    let lugar= parseInt(prompt("Ingrese posicion"));

    for(let i=0; i<= texto.length; i++){
        if(frase.charAt(i)== lugar){
            cont+=1;
        }
    }
}

function cuantosMinutos(){
    let hora = prompt("Ingresa la hora en formato HH:mm");
    let div = hora.split(':');

    let hour = parseInt(div[0]);
    let min = parseInt(div[1]);
    if (hour === 0 && min === 0) {
        document.write("¡Feliz Año Nuevo!");
        return;   
    }
    let totalH = Math.abs(23 - hour);
    let totalMinut = Math.abs(60 - min);

    document.write(totalH + " horas y " + totalMinut + " minutos");
}
