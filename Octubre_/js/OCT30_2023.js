/*obtener la fehca actual del sistema y mostrar revisar foto
*
*/

function data() {
    let now = new Date();
    let yearStart = new Date(now.getFullYear(), 0, 1);
    let yearEnd = new Date(now.getFullYear() + 1, 0, 1);
    let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let porcentajeDiasTranscurridos = ((now - yearStart) / (yearEnd - yearStart) * 100).toFixed(2);
    let porcentajeDiasRestantes = ((yearEnd - now) / (yearEnd - yearStart) * 100).toFixed(2);
    let porcentajeDiaTranscurrido = ((now - dayStart) / (dayEnd - dayStart) * 100).toFixed(2);
    let porcentajeDiaRestante = ((dayEnd - now) / (dayEnd - dayStart) * 100).toFixed(2);
    let numeroSemana = Math.ceil(((now - yearStart) / (7 * 24 * 60 * 60 * 1000)) + 1);

    document.write("1) Hoy es " + now.getDate() + " del mes " + (now.getMonth() + 1) + " del año " + now.getFullYear() + "<br>");
    document.write("2) El número de semana actual del año es " + numeroSemana + "<br>");
    document.write("3) % de días transcurridos en el año es " + porcentajeDiasTranscurridos + "<br>");
    document.write("4) % de días restantes en el año es " + porcentajeDiasRestantes + "<br>");
    document.write("5) La hora actual es " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "<br>");
    document.write("6) % del día transcurrido es " + porcentajeDiaTranscurrido + "<br>");
    document.write("7) % de día que queda es " + porcentajeDiaRestante + "<br>");
}



  
 
 

    
  