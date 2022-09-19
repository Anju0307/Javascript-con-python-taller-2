addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = document.querySelector("#num1").value;
        let num2 = document.querySelector("#num2").value;
        if (num1 > num2){
            let res = num1-num2;
            document.querySelector("#res").innerHTML = `El resultado de restar el primer numero y el segundo es ${res}`;
        } else{
            document.querySelector("#res").innerHTML = "La operacion no se puede hacer :("
        }

    })
})