const clientes = require('./clientes.json')

function filterBy(lista) {
    let clientesBuscados = lista.filter((cliente) => cliente.endereco.apartamento == true && !cliente.endereco.hasOwnProperty('complemento'))
    // filtrando por clientes que moram em apartamento mas nao tem complemento cadastrado
    console.log(clientesBuscados)
}

filterBy(clientes)