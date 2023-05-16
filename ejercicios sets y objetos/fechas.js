/* - La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */




const fechaNacimiento = new Date('04 07 1999')
console.log(fechaNacimiento)

const comparacion = new Date() > fechaNacimiento

console.log(comparacion)


const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth()+1
console.log(mesNacimiento)

const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento)




