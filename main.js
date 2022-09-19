addEventListener("DOMContentLoaded", (e) => {
    let dato = document.querySelector("#dato");
    dato.addEventListener("change", (e) => {
        let seleccionado = dato.value;
        let boton = document.querySelector("#form");
        boton.addEventListener("submit", (e) =>{
            e.preventDefault();
            let sueldoEmp = pagar(seleccionado);
            document.querySelector("#total").innerHTML = sueldoEmp;
        })
    })
})

function pagar (seleccionado){
    let horas = document.querySelector("#horas").value;
    if  (seleccionado == "Planta"){
        const sueldo = 20000;
        let pagoTotal = sueldo*horas;
        return pagoTotal;
    } else if (seleccionado == "Administrativo"){
        const sueldo = 10000;
        let pagoTotal = sueldo*horas;
        return pagoTotal;
    } else{
        alert("Debes seleccionar un cargo")
    }
}