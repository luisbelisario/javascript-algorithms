const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefones: ["8678788789", "867878787878"]
}

const cliente2 = {
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

pedido1 = {
    numeroPedido: 1234,
    valorPedido: 29.90,
    dataEntrega: "12/05/2023"
}

cliente2.pedidos.push(pedido1)

console.log(cliente2)