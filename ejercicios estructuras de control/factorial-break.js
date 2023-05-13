/*  Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una
    sentencia break 
    
*/


let i = 1

let count = 1

while(i <= 11){
  count*= i
  
  if(i == 10){
    console.log(`el valor de i es : ${i}`)
    
    break

  }
  i++
    
}

