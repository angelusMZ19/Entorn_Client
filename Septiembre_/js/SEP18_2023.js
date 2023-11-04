//javascript externo
function funciona(){
    alert("hola mundo");
}

function sobame(){
    alert("quitame el susto, si funciona")
}
function arrastrame(){
    alert("jejejej cholito no puedes hacerme eso")
}
function escribeme(){
    let escric= document.getElementById("write").value;
    alert("Esta bonito pero falta mas que solo esto:  " + escric);
}

function tabla() {
    const val = document.getElementById('multi').value;
    for (var i = 1; i<11; i++) {
        console.log(val + "x" + i + "=" + i*val);
    }
}
