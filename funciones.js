alert("Temario de Funciones")

/*--------##################-------------
//Las funciones son una porcion de codigos
//que se puede reutilizar

//Declaracion de la funcion
function saludar(){
   respuesta = prompt("¡Hola como fue tu dia");
   if (respuesta == "bien") {
      alert("Bien por ti")
      
   }else {
      alert("una pena")
   }
}
//Declaracion de la funcion

//-----Invocar, llamar o ejecutar la funcion---
saludar()
---------##################-----------------*/

//####---PARAMETROS DE LA FUNCION---####
/*function suma(num1,num2) {
   let res = num1 + num2;
   document.write(res);
   document.write("<br>");
   
}

suma(12, 13)
suma(11, 43)
suma(52, 113)*/

/*---Que es return----
Una cosa es lo que hace la funcion y otra cosa lo que retorna
*/
//---example_1---------------------
function suma(n1,n2) {
   let res = n1 + n2;
   return res
}

let resutado = suma(20,15);

document.write(resutado)


//---example_2---------------------
function saludar(nombre) {
   let frase = `¡HOla ${nombre}! ¿Como estas?`;
   document.write(frase)
}

saludar("Deiler")

//----##ESCOPE##---------
/*Es el ambito donde esta la variable; la region, las funciones
tienen un escope general, las variables dentro de dicha funcion 
es regional solo funciona en ese contexto. por eso es 
importante usar el LET para la variable*/