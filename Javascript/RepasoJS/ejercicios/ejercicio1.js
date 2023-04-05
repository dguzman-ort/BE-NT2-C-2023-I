/**
 * Hacer una funcion que dado un array de participantes del curso me devuelva el alumno con mayor edad.
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */


function participanteMayorEdad(array){
  var edadPivote = 0
  var alumno = null

  for(let i = 0; i < array.length; i++){
    if (array[i].age >= edadPivote){
      edadPivote = array[i].age
      // alumno = array[i] // Si dejamos esta sentencia lo que pasa es que deja la referencia
      alumno = Object.assign({}, array[i])

    }
  }

  return alumno

}

const alumnos = [
  {
    firstName: "Dani",
    lastName: "Guzman",
    age: 31
  },
  {
    firstName: "Ana",
    lastName: "Lopez",
    age: 22
  },
  {
    firstName: "Laura",
    lastName: "Mejia",
    age: 40
  }
]

const alumnoMayorEdad = participanteMayorEdad(alumnos)

console.log(`${alumnoMayorEdad.firstName} ${alumnoMayorEdad.lastName} es el alumno con mayor edad`)






/**
 * Metodos para recorrer listas (FOR)
 */

console.log("******* FOR *******")
for(let i=0; i < alumnos.length; i++){
  console.log(alumnos[i])
}



/**
 * Metodos para recorrer listas (FOR IN)
 */
console.log("******* FOR IN *******")
for(const index in alumnos){
  const alumno = alumnos[index]
  console.log(alumno)
}


/**
 * Metodos para recorrer listas (ForEach)
 */
console.log("******* ForEach *******")
alumnos.forEach(console.log)





