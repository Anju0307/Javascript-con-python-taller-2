addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = document.querySelector("#num1").value;
        let num2 = document.querySelector("#num2").value;
        let num3 = document.querySelector("#num3").value;
        let num4 = document.querySelector("#num4").value;
        validacion(num1,num2,num3,num4);
        document.querySelector("#pares").innerHTML= `La suma de los numeros pares es: ${pares}`;
        document.querySelector("#impares").innerHTML= `La multiplicacion de los numeros impares es: ${impares}`;
    })
})
let impares=1, pares=0;

function validacion(num1,num2,num3,num4){
    if (num1 % 2 != 0){
        impares*=parseInt (num1);       
    } else {
        pares+= parseInt (num1);
    }
    if (num2 % 2 != 0){
        impares*=parseInt (num2);
    } else {
        pares+= parseInt (num2);
    }
    if (num3 % 2 != 0){
        impares*=parseInt (num3);   
    } else {
        pares+= parseInt (num3);
    }
    if (num4 % 2 != 0){
        impares*=parseInt (num4);
    } else {
        pares+= parseInt (num4);
    }
}