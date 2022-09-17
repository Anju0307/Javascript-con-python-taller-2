function positivo(numero){
    if (numero>0 && numero<100){
        let resultado="El numero es positivo y es menor a 100";
        return resultado;
    }
    else{ 
        let resultado="El numero o es negativo o es mayor a 100";
        return resultado;
    }

}
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#form");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero = document.querySelector("#numero").value;
        let resultado = positivo(numero); 
        document.querySelector("#res").innerHTML= resultado;
    })
    
})
