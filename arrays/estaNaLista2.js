const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

var aluno = 'João'
if(lista[0].includes(aluno)) {
    // destructuring
    const [alunos, medias] = lista

    var i = alunos.indexOf(aluno)
    console.log(`Aluno: ${alunos[i]}, Nota: ${medias[i]}`)
} else {
    console.log(`Aluno ${aluno} não está na lista`)
}
