const saludar = (function(){
  var mensaje = "hola mundo"

  function saludando(){
    console.log(`Mensaje dentro del clousure: ${mensaje}`)
  }

  console.log("holaaaaaaa pau")

  return saludando

})()

console.log(typeof saludar)

saludar()





const counter = (function(){

  let number = 0

  console.log("inicializacion del counter.... (Buscando data a la API)")

  function inc(){
    number++
  }

  const dec = () => number-- 

  const showNumber = function(){
    console.log(number)
  }

  const sum = (num) => {
    number = number + num
  }


  return {
    showNumber,
    inc,
    dec,
    sum
  }

})()

console.log(counter, typeof counter)


counter.showNumber()

counter.sum(15)

counter.showNumber()

counter.inc()
counter.inc()
counter.inc()
counter.inc()

counter.showNumber()