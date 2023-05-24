const fibonacci = (numero) => {
    const arrayInicial = [0,1]
   
    for(let i =0; i < arrayInicial.length; i++){
            arrayInicial.push(arrayInicial[i] + arrayInicial[arrayInicial.length-1])
            if(arrayInicial.length == numero+1){
                    break
            }  
    }
    arrayInicial.shift()
    return console.log(arrayInicial)
}

fibonacci(6)