export default class User {

    constructor(nome, email, dataNascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Luis', 'luis@gmail.com', '26/05/1988')
console.log(novoUser)
console.log(novoUser.exibirInfos())
// a sintaxe de classe usa a herança de prototipagem por baixo dos panos
console.log(User.prototype.isPrototypeOf(novoUser))