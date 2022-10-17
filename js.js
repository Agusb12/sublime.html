// class producto{
// 	constructor (nombre,precio){

// 		this.nombre = nombre.toUpperCase()
// 		this.precio = parseFloat(precio)
// 		this.vendido = false

// 	}

// 		SacarIva() {
// 			 this.precio = this.precio * 0.21;
// 			 	console.log (this.precio)
// 		}

// 		vender(){
// 				if (this.vendido == false){
// 					console.log ("Abone" + this.precio)

// 					this.vendido = true;
// 				}

// 				else{
// 					console.log ("el producto ya se vendio")
// 				}
				
//         }		
// }

// const producto1 = new producto ("Arroz","150")
// const producto2 = new producto ("Fideos","200")

// 	producto1.SacarIva()
// 	producto1.vender()
// 	producto1.vender()


// let auto = {
// 	Color:  "rojo",
// 	Marca: "chevrolet",
// 	modelo: "aveo"
// }

// for (rojo in auto ){
// 	console.log ("hola")
// }

// const numeros = [1,2,3,4,5,6,54]

// for (let i = 0; i < 5; i++){
// 	console.log (numeros[i])
// }

// let recorreArray = (array)=>{

// let arrayLargo = array.length
// console.log (arrayLargo)


// let animales = ["Perro","gato","pajaro","serpiente","araña"]
	// animales.push ("leon") //Agrega un elemento 

	// animales.unshift ("elefante")//Agrega un elemento (Al principio)

	// animales.pop ()//Saca un elemento

	// animales.shift () //Saca el primer elemento

	// animales.splice (0,4) // Se marcan dos paramentros y elimina de ese parametro hasta el otro
    // console.log (animales)
	// console.log (animales.join(", ")) // devuelve todos los elementos del array transformados en strings

	// let nombres = ["Matias","Pedro","Adrian"]
	// let nombres2 = ["Lucia","Malena"]

	// let Ambos = nombres.concat(segundoGrupo) // El concat concatena dos arrays

	// console.log (Ambos.join(","))

		// console.log (nombres.indexOf("Matias")) // Devuelve la posicion del elementos
		// console.log (nombres.includes("Pedro")) // Igual que el indexOf, solo que en vez de devolver la posicion devuelve un booleano
	// console.log (animales.slice (0,2)) // Igual que el splice, solo que no elimina. Devuleve un nuevo array con los parametros incluidos
		// console.log (nombres.reverse()) // Invierte el orden de los elementos
		// // console.log (nombres.push("Lucas"))
		// console.log (nombres)
		

// let recorreArray = (array)=> {
// 	let arrayLargo = array.length
	
// 	for (let i = 0; i < arrayLargo; i++){
// 			console.log (array[i])
// 		}
// }
// recorreArray(animales)


// for (let i = 0; i < numeros.length; i++){
// 	console.log (numeros[i])
// }
// console.log (animales)

// let Nombres = ["Lucas","Matias","Pedro"]
// let Nombres2 = Nombres
// let cambioArrays = (array1,array2)=>{
// 	array2 = array1.slice().reverse()
// 	console.log (array1)
// 	console.log (array2)

// }



// 	cambioArrays (Nombres,Nombres2)


// 	const ingresarNombres = []
// 	let cantidad = 5

// 	do{
// 		let entrada = prompt ("Ingrese su/sus nombre/nombres")
// 		ingresarNombres.push(entrada)
		

		
// 	}

// 	while(ingresarNombres.length != cantidad)
// 		alert (ingresarNombres.join(", "))
		

// let eliminar = (nombre)=>{
// 				let index = ingresarNombres.indexOf(nombre)
// 					if (index != -1){
// 						ingresarNombres.splice (index,1)
// 					}

// 					else{
// 						alert ("El nombre no esta en la lista")
// 					}
// }

// 	 let pregunta1 = prompt ("Desea eliminar algun nombre?")
	  
// 		if (pregunta1 == "Si"){
			
// 	   		let pregunta2 = prompt ("Que nombre desea eliminar")
// 			eliminar(pregunta2)
// 		     alert(ingresarNombres)
// 		}

// 		else  {
// 			alert ("Chupala entonces")
// 		}



// class Personaje {
// 	constructor (nombre,edad,altura,sexo){
// 		this.nombre = nombre
// 		this.edad = edad
// 		this.altura = altura
// 		this.sexo = sexo

// 	}
// }

// const Personajes = []

// let crearPersonaje = ()=>{


// 	let sexo =  prompt ("Su personaje sera hombre o mujer?")
// 			 let Sexo = sexo.toString()
// 		Sexo = this.sexo

// 	let nombre = prompt ("Ingrese le nombre de su personaje")
// 			let Nombre = nombre.toString()
// 				Nombre = this.nombre


// 	let edad = prompt ("Ingrese la edad de su personaje")
	
// 		let Edad = parseInt(edad)
	
// 			Edad = this.edad


// 	let altura = prompt ("Y por ultimo, agregale una altura")	
		
// 		let Altura = parseInt (altura)
		
// 			Altura = this.altura

		
// 		 Personajes.push (personaje = new Personaje (nombre,edad,altura,sexo))
		 


// 		 for (caracteristicas of Personajes){
		 	

// 		 	console.log (personaje)
// 		 }
		 
// }
// crearPersonaje()

//  sacarIva =(precio)=>{

// 		let Iva = parseInt (precio * 0.21)
// 		let ivaFinal = Iva + precio

// 		return ivaFinal
 		
		
	
// 	}

// let paquetes = [{Silla:"Silla de madera",Escritorio:"Escritorio de madera",Precio:2500},{Silla:"Silla de MDF",Escritorio:"Escritorio de MDF",Precio:4000}]

	
// let seleccionarPaquete =()=>{

// 	let paquete = prompt ("Que paquete desea seleccionar")

// 	if (paquete == "paquete1"){
// 		for (propiedades of paquetes){
// 			return (sacarIva(propiedades.Precio))
// 		}
// 	}

//  }

//  console.log (seleccionarPaquete())

//  let agregarPaquete = ()=>{

//  	let nuevoPaquete = prompt ("Desea armar un paquete personalizado?")

//  		if (nuevoPaquete == "si"){

//  			let paqueteNuevo = paquetes.push(Object.assign("","",!NaN))

//  			paqueteNuevo.Silla = prompt ("Ingrese la silla")

//  			paqueteNuevo.Escritorio = prompt ("Ingrese el escritorio")

//  			paqueteNuevo.Precio = prompt ("Ingrese un precio accesible")

//  				return (sacarIva(paqueteNuevo))


//  		} 
//  }

//  console.log (agregarPaquete())

// function mayorQue (n){
// 	return (m) => m > n
// }

// console.log (mayorQue(40)(30))

// let asignarOperacion = (op)=>{

// 	if (op == "Suma"){
		
// 		return (a,b) => a + b
// 	}


// 	else if (op == "Raiz cuadrada"){

// 		return (a) => Math.sqrt(a)
// 	}

// }

// let raiz = asignarOperacion("Raiz cuadrada")

// console.log (raiz(12))

// let suma = asignarOperacion("Suma")

// console.log (suma(50,20) )


// function porCadaUno (array,funcion){

// 	for (const iterador of array){
// 		funcion(iterador)
// 	}
// }

// const numeros = [1,2,3,4]
// let duplicado = []

// function casa (a) {

// 	return console.log ("esaa" + a)
// }

// porCadaUno(numeros,casa)

// porCadaUno (numeros,(iterador)=>{duplicado.push(iterador * 2)})
// 	console.log (duplicado)

// numeros.forEach((num) => {console.log("mas uno = "+ parseInt (num + 1))}) // El forEach sirve para ejecutar una funcion cada vez que se itera un array

// let celular =[ 

// 	{nombre: "iphone", precio: 2500},
// 	{nombre: "android", precio: 1000}
// ]

// const resultado = celular.find( (el)=> el.nombre == "iphone" && el.precio == 2500) // el metodo find va a hacer una comparacion y va a el array de ser true o un undefined de ser false


	// resultado.precio-= 1000


// const resultado2 = celular.find( (el)=> el.nombre =="alcatel" && el.precio == 1000)


// console.log (resultado)
// console.log (resultado2)

// let celulares2 =[

// 	{nombre: "Iphone", precio: 20000},
// 	{nombre: "Android", precio: 15000},
// 	{nombre: "nokia", precio: 10000, color:"verde"},
// 	{nombre: "blackberry", precio: 5000}	

// ]

// const resultado3 = celulares2.filter( (el)=>el.precio >= 10000) // Igual que find, solo que va a filtrar un nuevo array de acorde a lo que se establezca
// console.log (resultado3)


// let resultado4 = celular.some( (el)=>el.nombre == "iphone" && "android") // Al igual que el find, hace una comparacion solo que este devuelve true o false
// console.log (resultado4)

// resultado4 = celulares2.map( (funcion)=>funcion.nombre) // este metodo devuelve un array con los elementos seleccionados en los parametros de la funcion

// console.log (resultado4)

//  let reductor = (array,array2)=>{
// let total = array.reduce( (acumulador,elemento)=> acumulador + elemento.precio,0) + array2.reduce( (acumulador,elemento)=> acumulador + elemento.precio,0) // el metodo reduce toma dos parametros. El primero es una funcion que toma como parametros un acumulador y un elemento. Y el segundo es el valor inicial del acumulador
// 	return total
// }
// console.log (reductor(celular,celulares2))


// numeros.sort( (a,b) => a-b) // El metodo sort va a ordenar los elementos segun como se indique en la función
// console.log (numeros)



// let numeros = [1,10,5,200]

// let personas = [
// 	{nombre: "Lucia", edad: 18},
// 	{nombre : "Agustin", edad:19 }

// ]

// personas.sort ( (a,b)=>  {
// 	if (a.nombre > b.nombre){
// 		return 1
// 	}

// 	if (a.nombre < b.nombre){
// 		return -1
// 	}
// })

// console.log(personas)


// let reduce = (valorInicial)=>{
	
//  let resultado =  celulares2.reduce( (acumulador,elemento)=> acumulador + elemento.precio,valorInicial)
	
// 		return resultado
// }

// let compra = ()=>{
// 	let descuento = -5000
// 	let pregunta = prompt ("Sos un cliente VIP")

// 			if (pregunta === "si"){
// 				return reduce(descuento)
// 			}

// 			else{
// 				return reduce(0)
// 			}
// 	}

// console.log (compra())


// console.log(Compra())

									//OBJECT MATH

// const pi = Math.PI

// console.log (Math.ceil(4.5)) // ceil va a redondear a un entero para arriba 
// console.log (Math.floor(4.6)) // floor va a devolver el entero para abajo
// console.log (Math.round(4.5)) // round a diferencia de ceil y floor, va a devolver el mas cercano (en el caso de ser x,5 devolvera hacia arriba)


// console.log (Math.random()) // el random devuelve un numero pseudo-aleatorio entre el 0 y el 1 (si no se le ponen parametros)

// console.log (new Date("january, 2022, 23:59:59"))


// const hoy = (new Date("december, 17, 2021, 12:30:40 "))

// console.log (hoy.getFullYear ())
// console.log (hoy.getMonth ())
// console.log (hoy.getDay ())

// console.log (hoy.toDateString ()); // fri dec 17 2021
// console.log (hoy.toLocaleString ()); // 17/12/2021 12:30:40
// console.log (hoy.toLocaleDateString ()); // 17/12/2021
// console.log (hoy.toTimeString ()); // 12:30:40 GMT-0300


// const navidad = new Date ("december,25,2022")

// let calcularDias = (dia)=>{
// 	 dia = new Date()
//  	let resultado = navidad - dia;
// 	 return (resultado / 86400000)
// }

// console.log(Math.round(calcularDias("december,8,2022")))

// const inicio = new Date()

// for (i = 0; i < 10000; i++){
// 	console.log ("haciendo tiempo")
// }
// const final = new Date ()
// console.log (final - inicio)

			//TIPOS DE EVENTOS CON MOUSE
// boton.onmove =()=>{console.log("ejemplo")}
// boton.onmousedown=()=>{console.log("ejemplo")}
// boton.onmouseup=()=>{console.log("ejemplo")}
// boton.onmouseout=()=>{console.log("ejemplo")}
// boton.onmouseover=()=>{console.log("ejemplo")}

// ESTO SE HACE AL QUERER CREAR UNA NUEVA ETIQUETA, DARLE ATRIBUTOS, Y QUE SE VEA EN PANTALLA
// let agregado = document.createElement("div") 
// agregado.setAttribute("id","agregado")
// agregado.innerHTML = "<h2>Agregado final</h2>"
// document.body.append(agregado)




// const Autos = ["dodge","volkswagen","renault"]

// let autos = document.getElementById("disponibles")

// for (Auto of Autos){
// 	let li = document.createElement("li")
// 	li.innerHTML = Auto;

// 	autos.appendChild(li)
	
// }


// for (celular of celulares){ 
// let contenedor = document.createElement("div")
// 	contenedor.innerHTML = `<h3>${celular.nombre}</h3>
// 							<b>${celular.precio}</b>`

// document.body.appendChild(contenedor)
// }

// let media = document.querySelector("#contenedor p")
// $("contenedor")

//Event handlers es el nombre que se la da a los eventos hechos en jS


// const cantidadCaracteres= ()=>{

// // }
// let evento = document.getElementById("nombre")  // este evento modificara al input
// evento.addEventListener("input", ()=>{	
// 		console.log(evento.value)
// 	})


// let formulario = document.getElementById ("formulario");

// formulario.addEventListener("submit",verificar);

// function verificar (e){

// 	e.preventDefault();
// 	alert("logrado");

// }
// 			DE ESTA FORMA (Y CON EL EVENTO SUBMIT) SE IMPRIME EN LA CONSOLA LOS DATOS OBTENIDOS DEL INPUT SELECCIONADO


			
// let input = document.getElementById("formulario")

// input.addEventListener("submit",returnSubmit)

// function returnSubmit(){

// e.preventDefault();

// let formulario = e.target;

// console.log(formulario.children[0].value)
// }


// let disponibles = []

// celulares.forEach( (elemento)=>{if (elemento.disponibilidad === true){disponibles.push(elemento)}})
	


// disponibles.sort( (a,b)=>{if (a.nombre > b.nombre){return 1} if (a.nombre < b.nombre){return -1}})

// console.log (disponibles)


// const seleccionarTelefono = (elemento)=>{

	
// 	let find = disponibles.find( (el)=>el.modelo === elemento)
		
// 		return find
// }

// const lista = []
// const comprar = (objeto)=>{
// 	let pregunta = document.getElementById("celular")
	
// 		if (pregunta === "A20"){

// 			objeto = seleccionarTelefono("A20")
// 				console.log(objeto)
// 				lista.push(objeto)
// 				return objeto
// 		}

		

// 		else if (pregunta === "7plus"){
// 			objeto = seleccionarTelefono("7plus")
// 			console.log(objeto)
// 			lista.push(objeto)
// 				return objeto

// 		}
		
// }
// const boton = document.getElementById("celular")
// boton.addEventListener("submit",respuestaClick)

// function respuestaClick() {
// comprar()

// const reductor = ()=>{
// let total = lista.reduce ( (acumulador,elemento)=>acumulador + elemento.precio,0)
// let Total = document.createElement("b")
// Total.innerHTML = `Su total a abonar es de ${total} `
// document.body.append(Total)
// return Total

// }


// let pregunta = prompt ("Desea comprar algo mas?")

// if (pregunta === "si"){

// 	 comprar()

// }

// else{
// 	alert ("Gracias por su compra")
// }

// const mostrarLista = ()=>{
//  	for(elemento of lista){
//  		let Lista = document.createElement("div")
//  		Lista.innerHTML = `<h3>Nombre: ${elemento.nombre}</h3>
//  						<b>	Precio: ${elemento.precio}</b>`

//  document.body.append(lista)
// 	}
// }

// (reductor())
// }

// 		LOCAL STORAGE SETITEM
// sessionStorage.setItem("valorNumerico",500);
// 	LOCAL STORAGE GETITEM
// let Valornumerico = sessionStorage.getItem("valorNumerico")
// let numero = parseInt(Valornumerico) // El storage devuelve todo en cadena de caracteres, por lo que si quiero que vuelva en valor numerico debo parsearlo
// console.log(numero)
// console.log(Valornumerico) 

//				FORMATO JSON

// const formatoJ = JSON.stringify(productoE)
// sessionStorage.setItem("productoE",formatoJ)
// console.log(typeof productoE)
// console.log(typeof formatoJ)		// El formato JSON convierte un objeto javaScript en una cadena de texto

// const productoE = [{id:1,nombre:"arroz",precio:2000},
// 				  {id:2,nombre:"malta",precio:1000}]

// 	productoE.forEach((el)=>{
// 		localStorage.setItem(el.id,JSON.stringify(productoE))
// 	})

// 	class Producto{
// 		constructor(objeto){
// 			this.nombre = objeto.nombre.toUpperCase()
// 			this.precio = parseFloat(objeto.precio)
// 		}
// 		sacarIva(){
// 			this.precio = this.precio *1.21
// 		}
// 	}

// 	const almacenados = JSON.parse(localStorage.getItem("1"));
// 	const vendidos = [];

// 	for (const objeto of almacenados)vendidos.push(new Producto(objeto));

// 	for (let productos of vendidos) productos.sacarIva();

// 	console.log(vendidos)


// FORMULARIO
const abrirForm = ()=>{
	let total = document.createElement("div")
		total.innerHTML= `<div id= "div-contenedor">
							<form class="form" id="formulario">
								<input pattern="[a-z]*" class="movido" type="text" name="Nombre" placeholder="Ingrese su nombre" required>
								<input type="password" name="password" placeholder="Ingrese su contraseña" required>
								<input type="email" name="email" placeholder="Ingrese su email" required>
								<button id="boton">enviar</button>
							</form>
						</div>`

document.body.append(total)
if (total = true){
	apartado.remove()
}

if (total = true){
	const form = (e) =>{
		e.preventDefault()
		const {Nombre,password,email} = e.target
			sessionStorage.setItem("user",(Nombre.value))
			sessionStorage.setItem("password",(password.value))
			sessionStorage.setItem("email",(email.value))
				let nombre = sessionStorage.getItem("user")
				let contraseña = sessionStorage.getItem("password")
				let mail = sessionStorage.getItem("email")
		// console.log(typeof "user")

				//RECORRER STORAGE
		for (let i = 0; i < sessionStorage.length; i++){  //De esta forma se recorre un storage, con el metodo key.
				let clave = sessionStorage.key(i)
				console.log(clave)
				console.log(sessionStorage.getItem(clave))
}

			 if (Nombre.value.length === 0) {alert ("No puedo no tener caracteres")}

		 Formulario.remove()

		 const celulares =  [
			{nombre:"Android",modelo:"A20",precio:45000,disponibilidad : true},
			{nombre:"Iphone",modelo:"7plus",precio:50000,disponibilidad : true},
			{nombre:"Android",modelo:"note 4",precio:20000,disponibilidad:true},
			{nombre:"Iphone",modelo:"9",precio:75000,disponibilidad:false}
			]
		
			let  disponibles = []
		
			Disponibles = celulares.filter( (el)=>{if(el.disponibilidad === true){disponibles.push(el)}})
				console.log(disponibles)
		
			let btnDeCompra = document.createElement("button")
				btnDeCompra.innerHTML = `<button id="compra">Compre aqui</button>`
					document.body.append(btnDeCompra)
		
			const abrirCatalogo =()=>{
				let catalogo = document.createElement("div")
				catalogo.innerHTML = 
						`<div class= catalogo>
							<img class = "img-catalogo" src = https://images.samsung.com/is/image/samsung/mx-galaxy-a20-a205-sm-a205gzkltce-frontblack-thumb-159327091></img>
							<img class = "img-catalogo" src = https://images.fravega.com/f300/e4e617fc64a5a0ed4681f3512eea7440.jpg.webp </img>
							<img class = "img-catalogo" src = https://assets.piliapp.com/s3pxy/actual-size/galaxy-note-4/default-front.png </img>
						</div>`
				document.body.append(catalogo)

					if(catalogo=true){
						btnDeCompra.remove()
					}
			}
	
			const eventCompra = document.querySelector("#compra")
				eventCompra.addEventListener("click",abrirCatalogo)
	}
		const Formulario = document.querySelector("#formulario");
			Formulario.addEventListener("submit",form);
}
}
	const apartado = document.querySelector("#ingreso");
		apartado.addEventListener("click",abrirForm);

//CALCULADORA

			//OPERADOR TERNARIO

let temperatura = 32

temperatura >30 ? console.log("Dia caluroso"): console.log("Dia agradable") // Retorna dos valores, y van a variar si la condicion se cumple

let numero = 30
JSON.stringify(numero)
console.log(numero + 5)
