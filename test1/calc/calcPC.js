/*function sum(n1,n2) {
    let sum = n1 + n2;
document.getElementById('resultado').innerHTML = sum;

   
};

sum(4,3)*/

var operacion = parseInt(prompt("Para sumar digite: 1 <br/> Para multiplicar: 2" ));

let sum;
let mul;

switch (operacion) {
    case 1:
         if (operacion == 1) {
            let n1 = parseInt(prompt("Digite numero 1"));
            let n2 = parseInt(prompt("Digite numero 2"));
            sum = n1 + n2;
           
        document.getElementById('resultado').innerHTML = sum;
        
        }
        break;

    //case value:
        
          //  break;
    //default:
      //  break;
}