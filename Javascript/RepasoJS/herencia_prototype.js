const array = [1,2,3]


console.log(array)

array.push(5)

console.log(array)

console.log(typeof array, array.toString())

array.__proto__.toString = function() {
  return 'hello World'
}

console.log(array.toString())

const array2 = [4,5,6]

console.log(array2.toString())