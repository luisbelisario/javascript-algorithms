const clientes = require('./clientes.json')

function findBy(lista, key, value) {
    let clienteBuscado = lista.find((cliente) => cliente[key].includes(value))
    // o metodo find devolve o primeiro objeto encontrado com os parametros que estamos buscando
    // estou usando o includes para fazer busca dentro de objetos que podeme star contidos naquele objeto
    console.log(clienteBuscado)
}


findBy(clientes, 'nome', 'Olva')
findBy(clientes, 'telefone', '58996279799')
