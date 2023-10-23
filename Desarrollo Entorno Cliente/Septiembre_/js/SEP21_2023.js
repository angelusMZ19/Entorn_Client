//sepia de fivonachi
//todas las actividades de clase son de entrega obligatoria
function escribe(){
    let num = prompt("introduce un numero porfavor");
    console.log(sepia(num));
}

function sepia(num){
    const espiral= [0, 1];
    for(let orden=0; orden<=num ; orden++){
        
            espiral[orden]= espiral[espiral.length-2]+ espiral[espiral.length-1];

    console.log( "fibo[" + `${orden}` + "]" + "= "+ `${espiral[orden]}`);
    }
}

//practica de console con la tabla de multiplicar
function redact(){
    let num = prompt("introduce un numero entre 1 y el 10");
    if(num>=1 && num<=10){
        console.log("La tabla de multiplicar del " + `${num}`);
        console.log(calcula(num));
    }else{
        console.log("Intentelo de nuevo con un valor dentro del rango");
    }
}

function calcula(num){
    for( let numero = 1; numero<= 10; numero++){
    let x= numero * num;
    console.log( `${num}` + "x" + `${numero}` +": "+ `${x}` );
    }
}

//Practica basada en usar los console. -----ejecucion
//-----------------------------------------------------------
//console.log
function mensaje() {
    console.log("hola si funciona el log");
}
//console.error
function error() {
    console.error("esto es un mensjae de error");
}

//console.warn
function warn() {
    console.warn("esto e su mensaje warning");
}

//console.clear
function limpio() {
    console.clear("esto limpiara la consola");
}

//console.time
function crono() {
    console.time();
}

//console.timelong
function duracion() {
    console.timeLog();
}

//console.timeEnd
function apocalipsi() {
    console.timeEnd();
}







