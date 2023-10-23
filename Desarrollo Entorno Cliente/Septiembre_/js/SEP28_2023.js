/*se debe calcular de dos maneras:
 una con la libreria math de javascript
 y la otra con un bucle*/

function escribe(){
    let base = prompt("introduce el numero base ");
    let indice = prompt("introduce el numero del indice");
    console.log(Mathe(base, indice));
  
}

function Mathe(base, indice){
    console.time("Tiempo_total")
    let resultado= Math.pow(base, indice);
    console.log(resultado)
    console.timeEnd("Tiempo_total")

}

function danburi(){
    console.log("funciona el write")
    let a = prompt("introduce el numero base ");
    let b = prompt("introduce el numero del indice");
    console.log(bucle(a,b));

}
function bucle(a,b){
    console.time("total_bucle: ");
    let res;
    for(let i= 1; i<=b; i++){
        a=a*a;
    }
    console.log(a);
    console.timeEnd("total_bucle: ");
    
}
/*Actividad2
pedir 3 numeros
Mostrar la media, mediana, major y menor  */

function redact(){
    let a= parseInt(prompt("Introduce el primer valor"));
    let b= parseInt(prompt("Introduce el segundo valor"));
    let c= parseInt(prompt("introduce el tercer valor"));
        console.log(calcularEstadisticas(a,b,c));
        
}

function calcularEstadisticas(a, b, c) {
    // Calcular la media
    const media = (a + b + c) / 3;

    // Encontrar el valor mayor y menor
    const mayor = Math.max(a, b, c);
    const menor = Math.min(a, b, c);

    // Calcular la mediana (en este caso, la mediana es simplemente el 
    //valor intermedio)
    let numOrden = [a, b, c];
    numOrden.sort((x, y) => x - y);
    const mediana = numOrden[1];

        console.log('Media:'+ media);
        console.log('Mediana:'+ mediana);
        console.log('Mayor:'+ mayor);
        console.log('Menor:'+ menor);


}