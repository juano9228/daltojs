/*
n1 = 5;
n2 = 2;

n1+=n2;
alert("La suma es : "+n1);*/

/*
var n1 = prompt("Primer numero Mayor");
var n2 = prompt("Digite nemero menor");

if (n1 > n2) {
    let resultado = parseInt(n1) + parseInt(n2);
alert("La suma es : " +  resultado);

}else{
    alert("Digitos incorectos")
}*

//Ejercico #1
let nombre = prompt("Digite su nombre");
let edad = parseInt(prompt("Digita tu edad")) 



console.log(`Hola ${nombre}, tienes ${edad} años y el año siguiente
tendras ${edad+1}`)/

//-------------##ejercicio AREA FIG. GEOMETRICAS #2
//Triangulo = b * h/2
//Rectangulo = b * h
//circulo pi * radio al cuadrado

let figura = prompt("Digite la figura geometrica: triangulo, rectangulo");

let base;
let altura;

if (figura == "triangulo") {
        base=prompt("Introduce la base")
        altura=prompt("Introduce la altura")

    console.log(`El area del triangulo es ${base * altura/2}`)

}else if (figura == "rectangulo") {
    base=prompt("Introduce la base")
    altura=prompt("Introduce la altura")

console.log(`El area del rectangulo es ${base * altura}`)

}else{
    alert("No tenemos ese calculo")
} */

/* ///---##FIGURAS GEOMETRICAS---------------
let figura = prompt("Digite la figura geometrica: triangulo, rectangulo");

let base;
let altura;

switch(figura){
    case 'triangulo':
        base=prompt("Introduce la base")
        altura=prompt("Introduce la altura")

        console.log(`El area del triangulo es ${base * altura/2}`)
        break

    case 'rectangulo':
        base=prompt("Introduce la base")
        altura=prompt("Introduce la altura")

        console.log(`El area del rectangulo es ${base * altura}`)
        break   

    default: alert("La figura no esta disponible");
}*/

/*sOLICITA UN NUMERO E IMPRIME TODO LOS NUMEROS PARES E IMPARES DESDE 
1 HASTA ESE NUMERO COMO EL MENSAJE "ES PAR" O "ES IMPAR" */

let num = prompt("Digite un numero");

for (let i=1; i<=num; i++){
   if (i%2 == 0) {
       console.log(`${i} - es par`);
   }else{
       console.log(`${i} - es impar`)
   }
    
}