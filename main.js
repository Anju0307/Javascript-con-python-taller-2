function area (lado1, lado2){
    let area= lado1 * lado2;
    return area;
}

addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let lado1 = document.querySelector("#lado1").value;
        let lado2 = document.querySelector("#lado2").value;
        if (lado1<=0 || lado2<=0){
            alert("No puedes ingresar lados negativos subnormal");
        } else {
            let res =area(lado1,lado2);
            document.querySelector("#area").innerHTML = res;
        }
    })
})
