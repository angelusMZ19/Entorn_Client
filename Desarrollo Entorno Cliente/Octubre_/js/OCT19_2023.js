//Demanar al usuario un nombre de archivo i pintar por consola la extencion correspondiente del mismo
function selectExtencion(){
    //funcion que recibe un nombre de archivo.extension se encarga de retornar solo la extension
    let Archivo= prompt("Ingrese un nombre de archivo (index.html)");
    let extense = Archivo.split('.');
    
    document.write("<p> el nombre del archivo es: "+ Archivo +" la extension es: "+extense.pop())
}

//Pedir al usuario una frase -> mostrar de la frase la cantidad de lestras a y b que hay
function putOn(){
    let texto = prompt("Introduzca un texto").toUpperCase();
    console.log(texto)
}
function ContarVocal(texto){

    let A = "A";
    let B = "B";
    let countA = 0;
    let countB = 0;
    for(let i = 0; i<texto.length; i++){
        if(texto.charAt(i) == A){
            countA ++;
        }else if(texto.charAt(i) == B){
            countB ++;
        }
    }

    document.write("El texto introducido: "+ texto);
    if(countA == countB){
        document.write("el numero de vocales es el mismo para 'a': " + countA + " y 'b' : "+ countB);
    }else{
        document.write(" el numero de vocales no es el mismo para 'a': " + countA + " y 'b' : "+ countB);
    }

}
