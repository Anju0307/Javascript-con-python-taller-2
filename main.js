function mayor(numero1,numero2,numero3){
    /* Limpiar h1 */
    document.querySelector("#mayor").innerHTML="";
    document.querySelector("#menor").innerHTML="";
    document.querySelector("#iguales").innerHTML="";
    if (numero1>numero2 && numero2 >=numero3){
        document.querySelector("#mayor").innerHTML= "El numero mayor es "+numero1;
        if (numero2>numero3){
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero2;
        } else{
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero3;
        }

    } else if (numero2>numero1 && numero2 >=numero3){
        document.querySelector("#mayor").innerHTML= "El numero mayor es "+numero2;
        if (numero1>numero3){
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero3;
        } else{
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero1;
        }
    } else if (numero3>numero1 && numero3 >=numero2){
        document.querySelector("#mayor").innerHTML= "El numero mayor es "+numero3;
        if (numero1>numero2){
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero2;
        } else{
            document.querySelector("#menor").innerHTML= "El numero menor es "+numero1;
        }
    } else {
        document.querySelector("#iguales").innerHTML= "Todos los numeros son iguales "+numero1;
    }

}
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#form");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2= document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        mayor(numero1,numero2,numero3); 
    })
    
})
