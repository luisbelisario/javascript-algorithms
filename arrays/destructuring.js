const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numerosSemDestructuring = [numerosPares, numerosImpares]

console.log(numerosSemDestructuring)

const numerosComDestructuring = [...numerosPares, ...numerosImpares]

console.log(numerosComDestructuring)

const [num1, num2, ...outrosNumeros] = [1,2,3,4,5,6]

console.log(num1)
console.log(num2)
console.log(outrosNumeros)

const [nome = 'Luis'] = [1]
const [nomePadrao = 'Luis'] = [undefined]

console.log(nome)
console.log(nomePadrao)