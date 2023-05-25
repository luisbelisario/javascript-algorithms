export default class User {
    // para declarar um atributo como privado no JS uso o #
    // tenho que declarar esse atributo na classe

    #nome
    // esse atributo será privado

    constructor(nome, email, dataNascimento, role, ativo = true) {
        this.#nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.#nome}, ${this.email}`
    }

    #metodoPrivado() {
        return 'Esse método é privado'
    }
}
/*
const novoUser = new User('Luis', 'luis@gmail.com', '26/05/1988')
console.log(novoUser)
console.log(novoUser.exibirInfos())
// a sintaxe de classe usa a herança de prototipagem por baixo dos panos
console.log(User.prototype.isPrototypeOf(novoUser))
 */