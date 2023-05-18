const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

var aluno = 'Beleza de Rosa'
for(var i=0; i<lista[0].length; i++) {
    if(lista[0][i] === aluno) {
        console.log(`Aluno: ${lista[0][i]}, Nota: ${lista[1][i]}`)
        return
    }
}
console.log(`Aluno ${aluno} não está na lista`)