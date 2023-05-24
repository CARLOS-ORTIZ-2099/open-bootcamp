let name = "carlos"
let lastName ="ortiz"

const objetoData = {name,lastName}

/* sessionStorage.setItem('datos',JSON.stringify(objetoData)) */

/* localStorage.setItem('datos',JSON.stringify(objetoData)) */

// Definir la duración de la cookie en minutos
const duracionMinutos = 2;

// Obtener la fecha y hora actual
const fechaActual = new Date();

// Calcular la fecha y hora de caducidad de la cookie sumando la duración en minutos
const fechaCaducidad = new Date(fechaActual.getTime() + duracionMinutos * 60000);

// Crear una cadena con los datos del objeto
const datosObjeto = JSON.stringify(objetoData);

// Crear la cookie con los datos y la fecha de caducidad
document.cookie = `datos=${datosObjeto}; expires=${fechaCaducidad.toUTCString()}`;
console.log("Cookie creada correctamente");

