import { personas, MAYORIA_EDAD } from './personas'

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */

const validateAge = (persona) => persona.age >= MAYORIA_EDAD

const newPersons1 = personas.map(persona => {
  /*
  return {
    firstName: persona.firstName,
    lastName: persona.lastName,
    age: persona.age,
    allowed: validateAge(persona)
  }*/

  return {
    ...persona,
    //lastName: 'Perez',
    allowed: validateAge(persona)
  }
})




console.log(newPersons1)



/*
const newPersons2 = personas.map(persona => {
  
  persona.allowed = persona.age >= MAYORIA_EDAD

  return persona
  
})

console.log(newPersons2)
*/



console.log("personas", personas)
