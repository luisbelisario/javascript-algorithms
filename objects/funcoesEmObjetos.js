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
    saldo: 200,
    pedidos: [],
    efetuaPagamento: function (valor) {
        if(valor <= 0) {
            console.log("Valor inválido")
        }
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(`Compra realizada! O novo saldo é ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(-2)