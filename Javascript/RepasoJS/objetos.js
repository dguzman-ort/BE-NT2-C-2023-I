function saludo(nombre){
  console.log(`Hola ${nombre}`)
}

console.log(typeof saludo)

const o = new Object()

console.log(o)

o.firstName = "Carlos"
o.lastName = "Tevez"
o.isTeaching = true
o.age = 32
o.friends = ["Ignacio", "Gabriel", "Luis", 5.9, new Object()]
o.sayHello = saludo

console.log(o)

o.sayHello('Joaquin')




delete o.lastName

console.log(o)


let cadena_objeto = JSON.stringify(o)

console.log(cadena_objeto, typeof cadena_objeto)

cadena_objeto = JSON.parse(cadena_objeto)

console.log(cadena_objeto)

console.log("********************") 



const o2 = {}

console.log(o2)

o2["firstName"] = "Ana"
o2["lastName"] = "Lopez"
o2["age"] = 29

console.log(o2, o2["firstName"], o2.firstName)

console.log(o2["age"])
if (o2["age"]){
  console.log(`${o2["firstName"]} ${o2["lastName"]} tiene ${o2["age"]} anios`)
}

const o3 = {
  firstName: "Daniel",
  lastName: "Guzman",
  age: "32",
  phone: "1111111",
  academicLevel : [
    {
      title: "BS Computer Engineer",
      anio: "2013"
    },
    {
      "title": "Msc. Computer Science",
      "anio": "2019"
    }
  ]
}

console.log(o3)

