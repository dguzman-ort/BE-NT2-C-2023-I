const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const peticion = fetch(url)

console.log(peticion)

peticion.then(() => { // 1
  console.log("Se ejecuto correctamente la peticion")
})

peticion
.then((res) =>{// 2
  return res.json()
})
.then(data => console.log(data)) //5


peticion.catch(() => { // 3
  console.error("No se ejecuto la peticion")
})

peticion.finally(() => { //4
  console.log("El finally se ecuta no importando si la promesa se cumple o no")
})


console.log("Hola mundo....")