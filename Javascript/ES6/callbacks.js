function obtenerUsuarioBD(arg){ // funcionCallback

  // Esto simula que hago una llamada a la BD
  console.info("Aqui procedo a llamar a la BD")

    //obtener la data 
    const userData ={
      firstName: 'Carlos',
      lastName: 'Gonzalez',
      age: 17
    }

    // Suponiendo que es una llamada al backend (o a una persistencia) y esta dura 2sg.
    // En este punto invoco el arg con esta informacion
    if (typeof arg === 'function'){
      arg(userData)
      // funcionCallback(userData)
    }

}




function saludoUsuario(user){
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}



//obtenerUsuarioBD(saludoUsuario)

//obtenerUsuarioBD(console.log)




//obtenerUsuarioBD(console.warn)

//obtenerUsuarioBD(console.error)


const funcionCallback = (user) => {
  if (user.age >= 18){
    console.log(`Bienvenido al casino ${user.firstName.toUpperCase()}`)
  }else{
    console.error("ERROR: no podes entrar al casino")
  }
}

obtenerUsuarioBD(funcionCallback)

obtenerUsuarioBD(console.log)

