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

const chavesDoObjeto = Object.keys(cliente)
// esse metodo mostra as chaves do objeto
console.log(chavesDoObjeto)