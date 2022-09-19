function area (lado1, lado2){
    let area= lado1 * lado2;
    return area;
}

addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let presion = document.querySelector("#presion").value;
        let temp = document.querySelector("#temp").value;
        if (presion>200 || temp>100){
            alert("CORRAAAAAAAAAAAAAAAAAAN")
        } else{
            alert("Normal")
        }
    })
})
