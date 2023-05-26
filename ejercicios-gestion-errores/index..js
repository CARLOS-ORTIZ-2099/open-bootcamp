function error(value) {
    // EL TRY CONTENDRA A TODOS LOS 'CANDIDATOS' QUE PUDIERAN DAR POSIBLES ERRORES
    try{
        if(typeof value!== 'number'){
            // AL CREAR THROW ES COMO SI CREARAMOS UNA EXCEPCION Y ESE VALOR SERA CAPTURADO POR EL CATCH
            throw new Error('Se esperaba un valor numérico')
        }
        else {
            return console.log('data valida')
        }

    }

    // MIENTRAS QUE EL CATCH MANEJARA EL ERROR DE CUALQUIERA DE ESOS 'CANDIDATOS'
    catch(message){
            console.error(`${message}: ${value} no es un numero`)
    }

}

error('hola')

// catch es una especie de funcion que recibe un parametro que sera pasado por la excepcion throw

/* 
    El bloque catch es una sección de código que se ejecuta cuando se produce una excepción en el bloque try. El parámetro
    que recibe el bloque catch es el objeto de error que se generó con throw.

    Cuando se lanza una excepción con throw, el flujo del programa pasa directamente al bloque catch, donde se puede manejar 
    el error de alguna manera específica. El objeto de error pasado al catch proporciona información sobre el tipo de error y
    puede contener detalles adicionales sobre el error.

    Es importante destacar que el bloque catch solo se ejecutará si se produce una excepción en el bloque try. Si no se produce
    ninguna excepción, el bloque catch se omitirá y el flujo del programa continuará normalmente.
*/



/* no es necesario instanciar un objeto con la clase Error para lanzar una excepción con throw. Puedes lanzar una excepción
   directamente usando la sintaxis throw seguida de cualquier valor que desees.
   La clase Error se utiliza comúnmente para crear objetos de error con información adicional sobre el error, como un 
   mensaje descriptivo o propiedades personalizadas. Sin embargo, también puedes lanzar excepciones con otros tipos de 
   valores, como una cadena de texto. 
   
*/