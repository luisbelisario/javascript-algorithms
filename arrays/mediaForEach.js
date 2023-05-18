const notas = [10, 6.5, 8, 7.5];

notas.forEach(function (nota, banana, nanica) {
    console.log(banana)
})

// arrow function
notas.forEach((nota, i) => {
    console.log(nota)
    console.log(i)
})
