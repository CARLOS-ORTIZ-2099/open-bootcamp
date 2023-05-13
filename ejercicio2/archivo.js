/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) 


*/



let nombre = 'carlos'
let edad = '24'
let desarrollador = true
let fechaDeNacimiento = new Date('apr 07 1999')

 let libroFavorito = {
  titulo: 'la odisea',
  autor: 'Homero',
  fecha: 'VIII a. C.',
  url:'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Odisea.pdf'
 }

 const listaInformación = [nombre,edad,desarrollador,fechaDeNacimiento,libroFavorito]

console.log(listaInformación)
