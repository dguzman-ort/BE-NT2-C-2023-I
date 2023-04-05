console.log("**** Clousere *****");

function helloFunction(){
  let message = "Hello world"
  var age = 18

  function getMessage(){
    return message
  }

  function getAge(){
    return age
  }

  console.log(message)

  /**return {
    getMessage: getMessage,
    age: age,
    getAge: getAge
  }*/

  return {
    getMessage,
    getAge,
    edad: age
  }

}

console.log(typeof message)


const clouser = helloFunction()

console.log(typeof clouser, clouser)


console.log(clouser.getMessage())
