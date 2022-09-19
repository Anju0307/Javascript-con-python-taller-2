addEventListener("DOMContentLoaded", (e) => {
    let dato = document.querySelector("#dato");
    dato.addEventListener("change", (e) => {
        let selec = dato.value;
        let boton = document.querySelector("#form");
        boton.addEventListener("submit", (e) => {
            e.preventDefault();
            let can = document.querySelector("#can").value;
            const pre = 2000;
            let total;
            if (selec == "TipoA") {
                total = ((pre * can) - ((pre * can) * 0.3));
            } else if (selec == "TipoB") {
                total = ((pre * can) - ((pre * can) * 0.2));
            } else if (selec == "TipoC") {
                total = ((pre * can) - ((pre * can) * 0.1));
            } else {
                alert("Escoge un tipo de helado!!!!")
            }
            document.querySelector("#total").innerHTML = `El total a pagar es de ${total}`
        })
    })
})