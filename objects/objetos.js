// const significa que não posso alterar o objeto completo
// mas posso alterar suas propriedades internas
const cliente = {
    nome: "Natassia",
    cpf: "12434314514",
    email: "natassia@gmail.com",
    idade: 32
}

console.log(cliente.nome)
// poso usar métodos daquele tipo de dado
console.log(cliente.cpf.substring(0, 3))
console.log(cliente["email"])
console.log(cliente["idade"])

console.log("")

// fazendo o mesmo código acima com arrays
const chaves = ["nome", "cpf", "email", "idade"]

chaves.forEach(chave => console.log(cliente[chave]))

console.log("")

// alterando objetos no js
cliente.email = "natassiaml@hotmail.com"
cliente.telefone = "869898989898"
console.log(cliente.email)
console.log(cliente.telefone)

// podemos tambem deletar um atributo de um objeto com delete
delete cliente.idade
console.log(cliente)