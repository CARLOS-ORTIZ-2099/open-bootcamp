/* - Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */




const list = ['apple', 'pear', 'rice', 'chicken', 'water']

list.push('aceite de girasol')


list.pop('aceite de girasol')


let movies = [
    {titulo:'avengers',
     director : 'hermanos russo',
     fecha: new Date('5 10 2018')      
    },
    {titulo:'avatar',
     director : 'steven spielberg',
     fecha: new Date('10 10 2008')      
    },
    {titulo:'insidius',
     director : 'james wang',
     fecha: new Date('2 2 2010')      
    }

]

console.log(movies)

const filtrado =  movies.filter((e) => {
    return e['fecha'] > new Date('1 1 2010') 
})

console.log(filtrado)


const directores = movies.map(e => e['director'])
const peliculas = movies.map(e => e['titulo'])

console.log(directores)
console.log(peliculas)

const concatenacion =  directores.concat(peliculas)

console.log(concatenacion)

const propagacion = [...directores,...peliculas]

console.log(propagacion)

