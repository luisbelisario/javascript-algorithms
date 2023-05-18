const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

console.log(lista[0].length)

for(var i=0; i<lista[0].length; i++) {
    console.log(`Aluno: ${lista[0][i]}, Nota: ${lista[1][i]}`)
}