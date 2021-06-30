alert("POO caracteristicas");
/*--Abstraccion: las características especificas de un objeto, 
aquellas que lo distinguen de los demás tipos de objetos y que logran 
definir límites conceptuales respecto a quien
está haciendo dicha abstracción del objeto..*/
/*---Modulacion: Ceparar un gran problema en partes*/
/*----Encapsulamiento: Que los datos esten protegidos */
/*Polimorfismo: Capacidad que tiene un objeto de comprtarse
distinto por sus propiedades,*/

			//---##POLIMORFISMO---###
			//---##HERENCIA, METODOS ESTATICOS, METH. DE ACCESO(getter, setters)
				//--ESTOS SON LOS QUE VAN A TENER CAMBIOS VISUALES EN EL CODIGO---
			//Usan palabras *Reservadas del lenguaje para funcionar
			/*
			Para:
			HERENCIA=> Extends
			M. Estaticos=> static
			M. A=> GET Y SET
			*/
//---###POLIMORFISMO###-----------------------------		
/*class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} 
		años y soy de color ${this.color}`;

	}
	verInfo(){
		document.write(this.info + "<br>")
	}
		
	ladrar(){
		if (this.especie == "perro") {
			document.write("waaw <br>");
		}else{
			document.write("No puede ladrar, ya que es un " + this.especie + "<br>");
		}
	}

}


let perro = new animal("perro",5,"Marron"); 
let gato = new animal("gato",2,"Blanco");
let pajaro = new animal("pajaro",1,"verde");

//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>")
//document.write(pajaro.info + "<br>")

perro.ladrar(); //POLIMORFISMO
gato.ladrar(); //POLIMORFISMO
pajaro.ladrar(); //POLIMORFISMO

//---###POLIMORFISMO_END###-----------------------------*/		


class Animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} 
		años y soy de color ${this.color}`;

	}
	verInfo(){
		document.write(this.info + "<br>")
	}
		
}

//---###HERENCIA---###
/*Una clase que va a tomar todo lo qu epuede hacer 
la otra clase y agrgarle coss nuevas*/
//NO se puede tener un objeto con le mismo nombre de la clase

class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrar(){
		alert("waaw!!!")
	}
}

let perro = new Perro("perro",5,"Marron","doberman"); 
let gato = new Animal("gato",2,"Blanco");
let pajaro = new Animal("pajaro",1,"verde");

perro.ladrar(); //POLIMORFISMO
gato.verInfo(); //POLIMORFISMO
pajaro.ladrar(); //POLIMORFISMO