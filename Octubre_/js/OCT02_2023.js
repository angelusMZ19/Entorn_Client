//ejecuciones de la fecha

function escribe(){
    let h = parseInt(prompt("Ingresa la hora"));
    let mes = parseInt(prompt("Ingresa los minutos"));
    let s = parseInt(prompt("ingresa los segundos"));

    console.log(fecha(h,mes,s));
}

function fecha(h,mes,s){
let dia= new Date();

dia.setHours(h);
dia.setMinutes(mes);
dia.setSeconds(s+1)

console.log(dia.getHours() + ":" + dia.getMinutes() + ":" + dia.getSeconds());
}


////////////////////////////////////////////////////////////////////////////////////////

function redaccion(){
    let anyo = parseInt(prompt("Ingresa el año"));
    let mes = parseInt(prompt("Ingresa el mes"));
    let dia = parseInt(prompt("ingresa el dia"));

    console.log(epoca(anyo,mes,dia));
}

function epoca(anyo,mes,dia){
    let fecha= new Date(anyo,mes,dia);

    fecha.getFullYear(anyo);
    fecha.getMonth(mes);
    fecha.getDay(dia);
        console.log(fecha)
        if(fecha.getFullYear(anyo)== anyo && fecha.getMonth(mes)== mes && fecha.getDay(dia)==dia){
                console.log("es una fecha valida");

            }else{
                console.log("no es una fecha valida");
            }
}

//////////////////////////////////////////////////////////////////////////////////////

function mostrar(){
    let dias = parseInt(prompt("ingresa el dia"));

    console.log(conteo(dias));
}
function conteo(dias){
    let di = 0;
    let mes=0;
    let anio=0;

        anio= Math.floor(dias / 360);
        mes = Math.floor((dias % 360)/30);
        di = Math.floor((dias % 30 ));
    console.log("El total de año es:        "+anio); 
    console.log("El total de mes es:        "+mes ); 
    console.log("El total de dia es:        "+di ); 
}
/////////////////////////////////////////////////////////////////
function pumpum(){
    let a= parseInt(prompt("Dame el primer numero"));
    let b= parseInt(prompt("Dame el segundo numero"));

    console.log(encuentra(a, b));
}

function encuentra(a, b){
let resA= Math.abs(100- a);
let resB= Math.abs(100- b);

    if(resA<resB){
        console.log("El numero mas cercano al 100 es:   " + a);
    }else{
        console.log("El numero mas cercano al 100 es:   "+ b);    
    }
}