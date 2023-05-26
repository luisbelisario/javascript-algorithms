novoNome = 'Luis Henrique Belisario'

let arrayNome = novoNome.split(" ")
console.log(arrayNome)
let [nome, ...sobrenomeArray] = novoNome.split(" ")

// ...sobrenome pega o resto das strings do array novoNome.split
sobrenome = sobrenomeArray.join(' ')
// acima estou juntando as strings do array em uma nova string chamada sobrenome

console.log(nome)
console.log(sobrenome)