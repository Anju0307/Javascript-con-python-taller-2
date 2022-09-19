addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector("#form");
    boton.addEventListener("submit", (e) => {
        e.preventDefault();
        let pro1 = document.querySelector("#pro1").value;
        let pro2 = document.querySelector("#pro2").value;
        let pro3 = document.querySelector("#pro3").value;
        let pro4 = document.querySelector("#pro4").value;
        let pro5 = document.querySelector("#pro5").value;
        let subtotal = parseInt(pro1)+parseInt(pro2)+parseInt(pro3)+parseInt(pro4)+parseInt(pro5);
        let iva = subtotal*0.10;
        let total = subtotal + iva;
        document.querySelector("#subtotal").innerHTML=`El subtotal es: ${subtotal}`;
        document.querySelector("#iva").innerHTML=`El iva es: ${iva}`;
        document.querySelector("#total").innerHTML=`El total es: ${total}`;
    })
})