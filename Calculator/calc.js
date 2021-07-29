alert("Hola mundo")

resultado = parseInt(prompt("Para suma digite 1, para multiplicacion digite: 2"))


switch (resultado) {
    case 1:
        if (resultado == 1) {
            let n1 = parseInt(prompt("Digite numero 1: "))
            let n2 = parseInt(prompt("Digite numero 2: "))
            let sum = n1 + n2;
            document.getElementById("resul").innerHTML = sum;
        }
        break;

        case 2:
            if (resultado == 2) {
                let n1 = parseInt(prompt("Digite numero 1: "))
                let n2 = parseInt(prompt("Digite numero 2: "))
                let mult = n1 * n2;
                document.getElementById("resul").innerHTML = mult;
            }
            break;

    default: 
        alert("Esta operacion no es valida")
        break;
}

