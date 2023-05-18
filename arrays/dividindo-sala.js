const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2) // qnd nao especifico o slice entende que quero ir ate o fim do array

console.log(sala1)
console.log(sala2)