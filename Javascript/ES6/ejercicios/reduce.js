/** ESTRUCTURA DE DATOS
 * 
 * {
 *  firstName,
 *  lastName,
 *  age,
 *  phone
 * }
 * 
 */

const CANTIDAD_ELEMENTOS = 5

const nombres = ['Carlos', 'Paula', 'Lionel', 'Elena', 'Mateo', `Enzo`]
const apellidos = ['Messi', 'Perez', 'Romero', 'Gomez', 'Di Maria', `Martinez`]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const generaNombre = () => `${nombres[random(0, nombres.length -1 )]}`
const generaApellido = () => `${apellidos[random(0, apellidos.length -1 )]}`


//Telefono seria: 55-555-555
const generarTelefono = () => `${random(10,99)}-${random(100,999)}-${random(100,999)}`


const crearContacto = () => {
  return {
   fullName: `${generaNombre()} ${generaApellido()}`,
   age: random(18,50),
   phone: generarTelefono()
  }
}

//const prueba = crearContacto()

//console.log(prueba)

const contactos = Array.from({
  length: CANTIDAD_ELEMENTOS  
}, crearContacto)

console.log(contactos)


/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura:
 * 
 * {
 * 
 *    C: [{}, {}, ..., {} ],
 *    E: [{}, {}, ..., {}]
 *    L: [{fullName: "Landa, Gabriel", age: 48, phone: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */


// Ejemplo de reduce sumando las edades de mi lista de contactos

const sumatoriaEdad = contactos.reduce((previousValue, element) => {
  console.log(previousValue, element)

  return previousValue + element.age
}, 0)

console.log("sumatoriaEdad", sumatoriaEdad)




/**
 * CONSIGNA FINAL: Con el objeto contactos agrupados por la primera letra
 *  devolver un array agrupados por titulo (primera letra) y ordenado 
 * alfabeticamente
 * 
 * Ejemplo:
 * 
 * [
 * 
 *  {
 *    "title": "A",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "F",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "R",
 *    "data": [{}, {}, {}]
 *  }
 * 
 * ]
 */