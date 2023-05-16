let name = 'carlos'
let lastName = 'ortiz'
let estudiante =  name + ' ' + lastName

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

let deleteSpaces = estudiante.replace(/ /ig,'')
console.log(deleteSpaces)

let boolean = estudiante.includes(name)
console.log(boolean)