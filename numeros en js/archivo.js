/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1"
 es igual al máximo valor que se puede obtener en Javascript 
 
*/



let heightCentimetros = 180
let heightMetros = 1.80
let  weight = 60.5

let redondeoHeight = Math.ceil(heightMetros)
let redondeoweigth = Math.floor(weight)
const maximos = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(redondeoweigth)



