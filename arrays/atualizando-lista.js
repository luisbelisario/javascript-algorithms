const alunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]

const alunosRemovidos = alunos.splice(1, 2) // remove a partir de um indice (primeiro parametro), uma quantidade especifica de elementos (segundo parametro)
// obs: tbm posso add um elemento no lugar daqueles removidos, basta add um terceiro parametro ao splice, com o valor que quero add

console.log(alunos)
console.log(alunosRemovidos)
