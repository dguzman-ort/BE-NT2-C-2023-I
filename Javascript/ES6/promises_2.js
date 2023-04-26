(async function(){

  console.log("Vamos a ejecutar el codigo dentro de esta funcion")

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const buscarPokemon = (name) => {
    return new Promise((completado, rechazado) => {
      fetch(`${url}/${name}`)
      .then(res => {
        if (res.ok){
          return completado(res.json())
        }else{
          throw new Error('No se ecuentra nada')
        }
      })
      .catch(error =>{
        return rechazado(error.message)
      })
    })
  }


  /**
  const pokemon = buscarPokemon('dsfwergreg')

  pokemon.then(data => console.log(data))

  pokemon.then(console.warn)
  
  pokemon.catch(error => console.error(error))


  //pokemon.finally(() => detenerESPINER())

  // invocoSpinner()
   */
  

  try{
    const pokemon = await buscarPokemon("ditto")
    console.log(pokemon)


  }catch(error){
    console.error(error)
  }


})()