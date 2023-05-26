import User from "./User.js";

const novoUser2 = new User('Luis', 'email@email.com', '2023-05-25')

console.log(novoUser2.exibirInfos())

//novoUser2.#nome = 'Teste'
// como o atributo nome está privado o JS nem deixa fazer essa atribuição
// ocorre erro de atributo privado

console.log(novoUser2.exibirInfos())
//console.log(novoUser2.#nome)
// também dá erro se eu tentar acessar o atributo privado diretamente

// testando o método get
// no caso do nome chamamos o método get como um atributo e não como um método
// mas também podemos usar a sintaxe clássica e chamar como um método, é o caso do email
console.log(novoUser2.nome)
console.log(novoUser2.getEmail())

novoUser2.nome = 'Jayson Teirun'
novoUser2.email = 'teyrunmvp@gmail.com'

console.log(novoUser2.nome)
console.log(novoUser2.getEmail())

// testando lançamento de exceção
novoUser2.nome = 'Jayson Tatum'
//novoUser2.email = 'teyrunmvp'