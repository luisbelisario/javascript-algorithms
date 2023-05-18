const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefones: {
        numero1: "89767627676",
        numero2: "867878787878" 
    },
    endereco: {
        rua: "Rua Joseph Climber",
        numero: 1337,
        complemento: "Ap 302"
    },
    pedidos: []
}

function ligaParaCliente(telefone1, telefone2, telefone3) {
    console.log(`Ligando para ${telefone1}`)
    console.log(`Ligando para ${telefone2}`)
    console.log(`Ligando para ${telefone3}`)
}

const map = new Map(Object.entries(cliente.telefones))
console.log(map)
// estou espalhando os valores do mapa telefones e chamando a funcao para cada um deles
console.log(...map.values())

ligaParaCliente(...map.values())

const encomenda = {
    destinatario: cliente.nome,
    // estou espalhando os dados de endereco do cliente no objeto encomenda
    ...cliente.endereco
}

console.log(encomenda)