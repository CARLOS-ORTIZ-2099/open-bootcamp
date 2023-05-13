/* Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por
  consola un "Hola soy una promesa" 5 segundos después de ha-
  berse ejecutado

- Una función generadora de índices pares automáticos

*/


// ejercicio 1W

function value(){

    return true

}

console.log(value())



// ejercicio 2
function asincrona(){

    setTimeout(() => {
        console.log('Hola soy una promesa')

    },5000)
}


asincrona()


// ejercicio 3

function* indexGenerator() {
    let index = 0;
    while (true) {
      yield index;
      index += 2;
    }
  }
  


  const generator = indexGenerator();
  console.log(generator.next().value);
  console.log(generator.next().value);
  
