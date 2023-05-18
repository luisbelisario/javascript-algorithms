const notas = [7.5, 4.5, 6.7, 10]

notas.push(8.5) // insere elemento na ultima posicao do array
notas.pop() // remove ultimo elemento do array
console.log(notas)

let soma = 0

notas.forEach(nota => {
    soma += nota
})

media = soma/notas.length

console.log(media)