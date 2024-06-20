// console.log("probando")

// solucion bonus lab.

let word1 = "taco cat";
let word2 = "amor, romar";

let cleanWord = "";

for (let i = 0; i < word2.length; i++) {
  let caracter = word2[i]

  if (caracter !== " " && caracter !== ",") {
    cleanWord += caracter
  }
}

console.log(cleanWord)
let reverseWord = "";

for (let i = cleanWord.length - 1; i >= 0; i--) {
  console.log(cleanWord[i])
  reverseWord += cleanWord[i]
}

console.log(reverseWord)

if (cleanWord === reverseWord) {
  console.log("son palindromos")
} else {
  console.log("no son palindromos")
}



// solucion bonus lab (con metodos)

let cleanWordAdv = word1.replaceAll(" ", "").replaceAll(",", "")

console.log(cleanWordAdv)

if (cleanWordAdv === cleanWordAdv.split("").reverse().join("")) {
  // split convierte el string a un array
  // reverse nos permite revertir el orden de los elementos de un array
  // join convierte el array de vuelta a un string
  console.log("son palindromos")
} else {
  console.log("no son palindromos")
}


// ejemplo de uso de loop for en strings. hacer todas las "a" a mayuscula

let string = "patata"; 

let nuevoString = "";


for (let i = 0; i < string.length; i++) {

  // console.log(string[i]) // esto se ejecuta 6 veces

  // quiero mayuscula todas las letras a

  if (string[i] === "a") {
    nuevoString = nuevoString + "A"
  } else {
    nuevoString = nuevoString + string[i]
  }

  console.log(nuevoString)

}


// FUNCIONES

// así declaramos una funcion
function nombreDeLaFuncion ( /* parametros de entrada opcionales */ ) {

  // .todo lo que va a hacer la funcion

  return // opcionalmente tendremos un valor de salida (return)

}

// así llamamos/invocamos/ejecutamos a una funcion
nombreDeLaFuncion( /* opcionalmente darle valores a los parametros (argumentos)*/ )




function imprimirNombre( nombreDeUsuario ) {
  // detras de camaras JS hacer lo siguiente: let nombreDeUsuario = valor
  // console.log(nombreDeUsuario)

  let capitalizedName = nombreDeUsuario[0].toUpperCase() + nombreDeUsuario.slice(1)
  console.log(`hola ${capitalizedName}`)
  // console.log("hola " + nombreDeUsuario)

}


imprimirNombre("marcos")
imprimirNombre("mario")
imprimirNombre("félix")
// imprimirNombre()
// imprimirNombre()
// imprimirNombre()
// imprimirNombre()
// imprimirNombre()


function sumaDeNumeros( num1, num2 ) {
  console.log(num1, num2)

  let suma = num1 + num2
  console.log(suma)

  // return nos permite sacar UN valor (el resultado de la funcion fuera de ella)
  return suma // esto no significa que la variable sale de la funcion

}


let suma1 = sumaDeNumeros( 2, 10 )
// accion 1 => ejecuta TODO el código que haya dentro de sumaDeNumeros
// accion 2 => nos devuelve el valor de la suma (valor retornado)

// necesito acceder al valor de la suma fuera de la funcion
// console.log(suma) // no puedo acceder a variables creadas dentro de una funcion
console.log(suma1)

let suma2 = sumaDeNumeros( -3, 8 )

let sumaTotal = sumaDeNumeros( suma1, suma2 )
console.log(sumaTotal)



// ejemplo de funcion


let staff1 = "juliette";
let staff2 = "leidy";

function capitalize(word) {

  let newWord = word[0].toUpperCase() + word.slice(1)
  // console.log(newWord)

  return newWord

}

// let staffCap1 = capitalize(staff1)
// let staffCap2 = capitalize(staff2)

// console.log(`nuestro maravillo staff está comprendido por ${staffCap1} y ${staffCap2}`)


console.log(`nuestro maravillo staff está comprendido por ${capitalize(staff1)} y ${capitalize(staff2)}`)

// funcion de declaración
// function imprimirAlgo() {
//   console.log("patata")
// }

// funcion de expresión
// const imprimirAlgo = function() {
//   console.log("patata")
// }

// funcion de flecha
const imprimirAlgo = () => {
  console.log("patata")
}



imprimirAlgo()


// ARRAYS



const myArr = [ "un string", 40 , true, null, { name: "bob" }, [ "otro string" ], (unArgumento) => {console.log("patata", unArgumento)} ]

console.log(myArr)


myArr[6]("tomate")


console.log(myArr[5][0][0])


// crear un array de ciudades

const cities = ["barcelona", "sevilla", "zaragoza", "alicante", "cáceres", "sufolk"]

console.log( cities.length )

console.log( cities[1], cities[2] )

console.log( cities[1][2]  )

console.log( cities[cities.length - 1][0] )

const ultimaCiudad = cities[cities.length - 1]
console.log(ultimaCiudad)

console.log( ultimaCiudad[ultimaCiudad.length - 1] )


// metodos de arrays


let indexOfZaragoza = cities.indexOf("zaragoza")
console.log(indexOfZaragoza) // la posición o -1 si no lo consigue


let isIncludedBarcelona = cities.includes("barcelona")
console.log(isIncludedBarcelona) // true or false



// slice

const nuevoArr = cities.slice(-3)
console.log(nuevoArr) // devuelve un nuevo array


// quiero un nuevo array con la primera y ultima ciudad
// const primeraYUltima = cities.slice(0, 1).concat(cities.slice(-1))

const nuevoArray = [ cities[0], cities[cities.length - 1] ]

console.log(nuevoArray)

// split y join


let unString = "hola mundo";

// let algo = unString.split("")
let algo = unString.split("o")
// el argumento va a ser el parametro de separación del string

console.log(algo)

let array = ["patata", "tomate"]

console.log( array.join(" - ") )


// mutabilidad


let str = "hola"

console.log(str[0])

str[0] = "H" // JS ignora esta instrucción

console.log(str)

str = str[0].toUpperCase() + str.slice(1)
console.log(str)


const friends = ["Ross", "Monica", "Rachel", "Joey", "Chandler", "Phoebe"]

console.log(friends)

friends[0] = "Mike"

console.log(friends)
// los arrays (y objetos son MUTABLES)

// en arrays y objetos, cuando los creamos como const, lo que decimos es que esa variable no puede otro valor. Pero el array/objeto si puede ser modificado.

console.log( friends.slice(2, 3) )

console.log(friends)

// aunque nos arrays/abjetos son mutables, NO TODOS LOS METODOS mutan el array original


// algunos metodos que si modifican el array original

// remover el ultimo elemento del array
// nos devuelve el elemento que ha removido
let removedFriend = friends.pop()

console.log("despues del pop", friends)
console.log(removedFriend)

// remover el primer elemento del array
// nos devuelve el elemento que ha removido
let removedFriend2 = friends.shift()

console.log("despues del shift", friends)
console.log(removedFriend2)

// push y unshift

friends.push("Janice") // añade al final
console.log("despues del push", friends)

friends.unshift("Gunther") // añade al inicio
console.log("despues del unshift", friends)


// que pasa si queremos añadir o borrar en algun lugar del centro

// splice (NO CONFUNDIRLO CON SLICE)

friends.splice(2, 2, "Robert", "Emily")
// 1. indicamos posición inicial a cortar
// 2. cantidad de elementos a cortar
// 3 en adelante. los elementos a agregar.

console.log("despues del splice", friends)

// revisar toSplice que hace lo mismo que splice pero no muta el array original sino nos devuelve el array con los cambios indicados.


let numbers = [ 10, 55, 80, "hola", 44, 200, true, null ]

// crear un array con todos los elementos numeros
// crear un nuevo array con todos los elementos que no sean los numeros

const onlyNumbers = [];
const impostors = [];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])

  console.log(typeof numbers[i])

  if (typeof numbers[i] === "number") {
    onlyNumbers.push(numbers[i])
  } else {
    impostors.push(numbers[i])
  }

}

console.log(onlyNumbers)
console.log(impostors)



// referencias

let age1 = 42;
let age2 = 42;

console.log(age1 === age2)


let agesArr1 = [20, 39, 45, 35]; // ref 1234
let agesArr2 = [20, 39, 45, 35]; // ref 5678

console.log(agesArr1 === agesArr2) // 1234 === 5678 => false


let agesArr3 = agesArr1 // asignando la misma referencia de agesArr1 a agesArr3.  ref 1234

console.log(agesArr3)

console.log(agesArr1 === agesArr3) // true

agesArr3.pop() //  ref 1234
agesArr3.pop() //  ref 1234
agesArr3.pop() //  ref 1234
agesArr3.pop() //  ref 1234

console.log(agesArr3)
console.log(agesArr1)


console.log(typeof "patata")
console.log(typeof 30)


// actividad

// 1. crea una funcion que reciba dos parametros
//  a. un array de nombres
//  b. un caracter

// analizar el array de nombres y devolvernos un numero que será la cantidad de nombres que empiezan por el caracter

// ["anna", "joel", "alexa", "bob"]
// "x"
// => 0


function howManyNamesStartWith( arrayOfNames, character ) {

  if (arrayOfNames.length === 0) {
    // la unica forma de verificar si el array está vacio
    return "no hay nombres en el array :("
  }

  // loop para iterar sobre los nombres
  // condicional 
  // contador = 0

  let contador = 0;

  for (let i = 0; i < arrayOfNames.length; i++) {
    
    if ( arrayOfNames[i].startsWith(character) === true ) {
      // console.log(arrayOfNames[i])
      contador++
    }

  }

  // console.log(contador)

  // NO SE LES OLVIDE RETORNAR EL VALOR
  return contador


}


console.log( howManyNamesStartWith(["anna", "joel", "alexa", "bob", "angel"], "a") ) // => 3
console.log( howManyNamesStartWith(["anna", "joel", "alexa", "bob"], "b") ) // => 1
console.log( howManyNamesStartWith(["anna"], "x") ) // => 0

// el ejercicio me pide considerar un caso atipico
// si a la funcion se le pasa un array vacio deberia enviar un mensaje especifico "no hay nombres :("
console.log( howManyNamesStartWith([], "x") ) // => "no hay nombres en el array :("
