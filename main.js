function mayor(numero1,numero2,numero3){
    if (numero1>=numero2 && numero2 >=numero3){
        let resultado= "El numero mayor es "+numero1;
        return resultado;
    } else if (numero2>=numero1 && numero1>=numero3){
        let resultado= "El numero mayor es "+numero2;
        return resultado;
    } else{
        let resultado= "El numero mayor es "+numero3;
        return resultado;
    }
}
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#form");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2= document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        let resultado = mayor(numero1,numero2,numero3); 
        document.querySelector("#res").innerHTML= resultado;
    })
    
})
