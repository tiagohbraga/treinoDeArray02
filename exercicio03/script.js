const arrayNum = [1, 5, 3, 8, 35, 2]
const arrayString = ["Uma", "string", "qualquer"]
const arrayMisturado = [2, 7, "outra string", 5<2]

const arrayNumCopia = arrayNum.slice(arrayNum)
const arrayStringCopia = arrayString.slice(arrayString)
const arrayMisturadoCopia = arrayMisturado.slice(arrayMisturado)

arrayNumCopia.push(9)
console.log(`Original: ${arrayNum} 
e a copia depois do push ficou assim: ${arrayNumCopia}`)

arrayStringCopia.pop()
console.log(`Original: ${arrayString} 
e a copia depois do pop ${arrayStringCopia}`)

arrayMisturadoCopia.splice(2,1)
console.log(`Original: ${arrayMisturado} 
e a copia depois de remover ${arrayMisturadoCopia}`)
