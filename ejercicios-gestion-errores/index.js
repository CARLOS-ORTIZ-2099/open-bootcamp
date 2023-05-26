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
