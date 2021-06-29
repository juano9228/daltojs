alert("Modulo de POO");
//---#Clases#---- SON FUNCIONES ESPECIALES
//Hay que generar un constructor para cada clase
class animal{
	constructor(especie,edad,color){//parametros para la clase
		this.especie = especie;
		//con this me declara un objeto que sera igual 
		//al valor que recicba el parametro
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} 
		años y soy de color ${this.color}`;

//Los metodos son las 
//acciones que el objeto va a realizar
/*Los METODOS SE CREAN DENTRO DE LA CLASE
un <<METODO ES UNA FUNCIO>>*/
//Las funciones FLechas no pueden ser usadas para
//crear un metodo dentro de la clase
	}
	verInfo(){
		document.write(this.info + "<br>")
	}

}

//con new se crea un nuevo objeto,
// osea una instancia de la clase animal
//<<perro>> va a ser un objeto de la clase animal
let perro = new animal("perro",5,"Marron"); 
let gato = new animal("gato",2,"Blanco");
let pajaro = new animal("pajaro",1,"verde");

//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>")
//document.write(pajaro.info + "<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();