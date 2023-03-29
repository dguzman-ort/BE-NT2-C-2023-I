
if (true){
  var ambito = "Esta variable esta disponible hasta que el codigo y/o funcion se ejecute"

  console.log(ambito)
}



console.log(ambito, typeof ambito)


if (true){
  let blockscoped = "Esta variable solo estara disponible dentro de este bloque de codigo"

  console.log("blockscoped", blockscoped)

  const otroBlock = "Esta variable solo estara disponible dentro de este bloque de codigo"
}

console.log("blockscoped", typeof blockscoped)

console.log("otroBlock", typeof otroBlock)