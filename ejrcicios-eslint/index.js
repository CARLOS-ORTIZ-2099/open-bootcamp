const first = "l"

// descativando reglas de eslint por lineas: esto se hace muy simple con comentarios

// 1 FORMA

/* eslint-disable */

const letter = 'maria'

/* eslint-enable */


// 2 FORMA

const newValor = 'p' // eslint-disable-line

// 3 FORMA le decimos que debe oviar
const newValor2 = 'p'; // eslint-disable-line quotes ,semi

// 4 FORMA 

/* eslint-disable-next-line indent,quotes  */
    const farewell = 'chao'
console.log("ere")

const greeting = "hola"

/* 
const name = "carlos"
const lastname = "ortiz"
const fullname = `${name} ${lastname}`  */


let name = "carlos"
let lastName = "ortiz"
let estudiante =  name + " " + lastName

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let countLetters = estudiante.length
console.log(countLetters)

let firstLetter = name[0]
console.log(firstLetter)

let lastLetter = lastName[lastName.length-1]
console.log(lastLetter)

let deleteSpaces = estudiante.replace(/ /ig,"")
console.log(deleteSpaces)

let boolean = estudiante.includes(name)
console.log(boolean)







