const cliente = {
    nome: "Natassia",
    cpf: "12434314514",
    email: "natassia@gmail.com",
    idade: 32
}

// transformando objeto em string json
let clienteString = JSON.stringify(cliente)
console.log(clienteString)

// transformando string em objeto JS
let clienteObjeto = JSON.parse(clienteString)
console.log(clienteObjeto)