addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let nota1 = document.querySelector("#nota1").value;
        let nota2 = document.querySelector("#nota2").value;
        let nota3 = document.querySelector("#nota3").value;
        let nota4 = document.querySelector("#nota4").value;
        let nota5 = document.querySelector("#nota5").value;
        let promedio = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4)+parseInt(nota5))/5;
        document.querySelector("#promedio").innerHTML = `La nota promedio de los estudiantes es de: ${promedio}`;
    })
})