//hoja de procesos matematicos para javaScript
function escribe(){
    let columnas= prompt("ingrese el numero de columnas");
    let filas= prompt("Ingrese el numero de filas:");
creaTablas(filas, columnas);
}

function creaTablas(filas, columnas){
    let t= document.createElement("table");
    for(let i=1; i<=filas; i++){
        let tr= document.createElement("tr");
        
        for(let j=1; j<= columnas; j++){
            let td= document.createElement("td");
            let text= document.createTextNode(":)")

            tr.appendChild(td);
            td.appendChild(text);
        }
        t.appendChild(tr);
    }
    document.body.appendChild(t);
}

/*no olvidarse de hacer la de la tabla de multiplicar */
function tablaMultiplicar() {
    let filas = parseInt(prompt("Ingresa el número de filas"));
    let columnas = parseInt(prompt("Ingresa el número de columnas"));

    let tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.style.margin = "20px";

    for (let i = 1; i <= filas; i++) {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 1; j <= columnas; j++) {
            let celda = document.createElement("td");
            celda.style.border = "1px solid black";
            celda.style.padding = "10px";
            celda.style.textAlign = "center";
            celda.style.fontWeight = "bold";
            fila.appendChild(celda);

            let contenido = document.createTextNode(i * j);
            celda.appendChild(contenido);
        }
    }

    document.body.appendChild(tabla);
}


function dibujarPiramide() {
    let col = parseInt(prompt("Base de la pirámide?"));
    let fil = (col/2)+1;

    let table = document.createElement("table");
    for (let i = 1; i<=fil; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j<=col; j++) {
            let td = document.createElement("td");
            td.style.height="20px";
            td.style.width="20px";

            if (j>(col+1)/2-i && j<=(col)/2+i) {
                td.style.backgroundColor = "red";
            }
            
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
  
  
    
/*  */