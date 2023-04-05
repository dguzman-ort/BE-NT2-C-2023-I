function imprimirUno(){
  console.log("uno")
}

function imprimirDos(){
  console.log("dos")
}

function imprimirTres(){
  console.log("tres")
}

setTimeout(imprimirUno)
setTimeout(imprimirDos, 5000) // expresion en milisegundos
setTimeout(imprimirTres)


const interval = setInterval(imprimirUno, 1000)

clearInterval(interval)