//funciones para el ejercicio 1 sobre Telefonica

function escribe(){
    let horas = parseInt(prompt("Dame cuanta hora"));
    let minut = parseInt(prompt("Dame cuantos minutos"));
    let segon = parseInt(prompt("Dame cuantos segundos"));

    console.log(calcula(horas, minut, segon));
}

function calcula(horas, minuts, segons){
    let calcul_h=(horas*60)*0.05;
    let calcul_m=(minuts)*0.05;
    let calcul_s=(segons/60)*0.05;

    let cost_total= calcul_h + calcul_m + calcul_s + 0.10;

    console.log(cost_total.toFixed(2));    
}

//////////////////////////////////////////////////////////////////////////////


function redacta(){
    let r = parseInt(prompt("Dame red  de 0-255"));
    let g = parseInt(prompt("Dame green de 0-255"));
    let b = parseInt(prompt("Dame blue de 0-255"));

    console.log(transformacio(r, g, b));
}

function transformacio(r,g,b){
    let transR= r.toString(16);
    let transG= g.toString(16);
    let transB= b.toString(16);

    

    console.log("#"+transR.padStart(2, '0').toUpperCase()+transG.padStart(2, '0').toUpperCase()+transB.padStart(2, '0').toUpperCase());    
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


function registra(){
    let precio = parseFloat(prompt("precio"));
    let dinero = parseFloat(prompt("dinero"));

    console.log(cambio(precio, dinero));
}

function cambio(precio, dinero) {
    let denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let vuelto = dinero - precio;
    console.log(precio);
    let resultado = {};

    for (let i = 0; i < denominaciones.length; i++) {
        let denominacion = denominaciones[i];
        let cantidad = Math.floor((vuelto / denominacion));
        console.log(cantidad);
        if (cantidad.toFixed(2)>= 0 ) {
            console.log(cantidad.toFixed(2));
            resultado[denominacion] = cantidad;
            vuelto -= denominacion * cantidad;
        }
    }

    for (let denominacion in resultado) {
        console.log(`${resultado[denominacion]} billete/moneda(s) de ${denominacion} euros.`);
    }
}

//////////////////////////////////////////////////////////
