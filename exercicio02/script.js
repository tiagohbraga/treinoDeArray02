const arrayNum = [1, 5, 3, 8, 35, 2]
const arrayString = ["Uma", "string", "qualquer"]
const arrayMisturado = [2, 7, "outra", "string", 5<2]

console.log(arrayNum.length)
console.log(arrayString.length)
console.log(arrayMisturado.length)

console.log(`Primeiro item do primeiro array = ${arrayNum[0]}, o segundo item do segundo array = ${arrayString.slice(2,3)} e o terceiro item do terceiro array = ${arrayMisturado.slice(3,4)}`)

console.log(`Tem o numero 1 no primeiro array? ${arrayNum.includes(1)} e existe a palavra tipo no ultimo array? ${arrayMisturado.includes("tipo")}`)