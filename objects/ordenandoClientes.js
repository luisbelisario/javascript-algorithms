const clientes = require('./clientes.json')

function sortByAsc(lista, prop) {
    const resultado = lista.sort((a, b) => {
        if(a[prop] > b[prop]) {
            return 1
        }
        if(a[prop] < b[prop]) {
            return -1
        }
        return 0
    })
    return resultado
}


const clientesOrdenados = sortByAsc(clientes, 'nome')
console.log(clientesOrdenados)

// para mostrar na ordem decrescente basta alterar os retornos 1 e -1 acima
// ou aplicar a funcao reverse() no retorno do metodo
const clientesOrdenadosDesc = sortByAsc(clientes, 'nome').reverse()
console.log(clientesOrdenadosDesc)