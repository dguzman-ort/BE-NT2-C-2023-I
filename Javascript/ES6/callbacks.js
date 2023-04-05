function obtenerUsuarioBD(callback){

  // Esto simula que hago una llamada a la BD
  console.info("Aqui procedo a llamar a la BD")

  setTimeout(() => {
    const userData ={
      firstName: 'Carlos',
      lastName: 'Gonzalez',
      age: 17
    }

    // Suponiendo que es una llamada al backend (o a una persistencia) y esta dura 2sg.
    // En este punto invoco el callback con esta informacion
    if (typeof callback === 'function'){
      callback(userData)
    }
    

  }, 2000)

}




function saludoUsuario(user){
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}



obtenerUsuarioBD(saludoUsuario)

obtenerUsuarioBD(console.log)




//obtenerUsuarioBD(console.warn)

//obtenerUsuarioBD(console.error)

obtenerUsuarioBD((user) => {
  if (user.age >= 18){
    console.log(`Bienvenido al casino ${user.firstName.toUpperCase()}`)
  }else{
    console.error("ERROR: no podes entrar al casino")
  }
})

