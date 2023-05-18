const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notas) {
    const somaNotas = notas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)
    // 0 é o valor inicial do acumulador
    // somaNotas será a soma das notas
    return somaNotas/notas.length
}

console.log(`Média da Sala de JS: ${calculaMedia(salaJS)}`)
console.log(`Média da Sala de Java: ${calculaMedia(salaJava)}`)
console.log(`Média da Sala de Python: ${calculaMedia(salaPython)}`)