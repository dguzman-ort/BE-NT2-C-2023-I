saludo()

//noFunction()
// anotherFunction()


const anios = 25

const cadena = `hola, yo tengo ${anios + 1} anios`
//const cadena = 'hola, yo tengo ' + 25 + ' anios'

//console.log(cadena)

function saludo(){
  console.log("hola mundo")
}



var noFunction = function(){
    console.log(cadena)
}

noFunction()

const anotherFunction = (param) => {
  //console.log(`hola ${param} desde otra function`)
  console.log(cadena)
}



anotherFunction('pedro')
