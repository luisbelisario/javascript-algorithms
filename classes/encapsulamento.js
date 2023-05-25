import User from "./User.js";

const novoUser2 = new User('Luis', 'email@email.com', '2023-05-25')

console.log(novoUser2.exibirInfos())

//novoUser2.#nome = 'Teste'
// como o atributo nome está privado o JS nem deixa fazer essa atribuição
// ocorre erro de atributo privado

console.log(novoUser2.exibirInfos())
//console.log(novoUser2.#nome)
// também dá erro se eu tentar acessar o atributo privado diretamente