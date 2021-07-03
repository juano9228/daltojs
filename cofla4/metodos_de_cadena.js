//alert("metodos_de_cadena");

/*Concat() une 2 cadenas de texto
let cadena = "cadena de prueba";
let cadena2 = "cadena 2";

resultado = cadena.concat(" cadena2");

document.write(resultado);

            //LOS STRING SON OBJETOS
let cadena = new String("cadena de prueba");
let cadena2 = "cadena 2";

resultado = cadena.concat(" cadena2");

document.write(resultado);*/

/*/---------startsWith()
let cadena = "cadena de prueba";
let cadena2 = "cadena";
//comprueba si una cadena inica con la otra
//En est caso el resultado sera <<TRUE>>
resultado = cadena.startsWith(cadena2);

document.write(resultado);
//---------startsWith()*/

 //INCLUDE()
 //bUSCA CADENAS

/* ------indexOf()
busca la pocion de la primera letra de la
cadena que se este buscando*/

/** 
//---padStart:
//relena la cadena al principio 
//con los caracteres deseados
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padStart(10,"j");
//jjjjjjjabc

document.write(resultado);*/

/*/---padEnd------
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padEnd(10,"j");
//abcjjjjjjj

document.write(resultado);*/

//----------------------####------------------------------
//split
//
let cadena = "hola como estas";
//let cadena2 = "";

resultado = cadena.split("como");


document.write(resultado[0]);