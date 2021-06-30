//alert("Problema2");
let free = false;

const validarClientes = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar gratis porque eres la primera persona depues de las 2am");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, para tienes que pagar la entrada`);
        }

    } else {
        alert("Eres menor de edad, no puedes pasar");
    }
}

validarClientes(3);