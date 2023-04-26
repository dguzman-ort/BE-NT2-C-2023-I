import { personas, MAYORIA_EDAD } from './personas'

console.log(personas)

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 * Edad minima 18
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

const personasHabilitadas = personas.filter((persona) => {
  console.log(persona)
  return persona.age >= MAYORIA_EDAD
})

const personasHabilitadas2 = personas.filter( persona => persona.age >= MAYORIA_EDAD)

console.log(personasHabilitadas, personasHabilitadas2)