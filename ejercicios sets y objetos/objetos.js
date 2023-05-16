/*  - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

    - Una variable que obtenga tu edad a partir del objeto anterior

    - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

    - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */



    const datos = {
        nombre:'carlos',
        apellido:'ortiz',
        edad:'20',
        altura:1.70,
        eresDesarrollador: true
    }


    let edad = datos.edad
    console.log(edad)

 

  class amigos{
    constructor(nombre,apellido,edad,altura,eresDesarrollador){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.altura = altura,
        this.eresDesarrollador = eresDesarrollador
    }
  }   

  const paula = new amigos('paula','montes',24,1.60,false)
  const zoe = new amigos('zoe','herrera',25,1.80,false)


  
  const lista = []

  lista.push(datos,paula,zoe)
  console.log(lista)

 const ordenación = lista.sort((a, b) =>  b['edad'] - a['edad'])

  console.log(ordenación)