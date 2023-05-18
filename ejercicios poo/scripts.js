class estudiante {
    constructor(nombre,asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos(){
        return `${this.nombre} estudia ${this.asignaturas}`
    }
}

const estudent = new estudiante('carlos',['javascript','HTML','CSS'])

console.log(estudent.obtenDatos())
