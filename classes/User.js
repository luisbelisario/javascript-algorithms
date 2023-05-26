export default class User {
    // para declarar um atributo como privado no JS uso o #
    // tenho que declarar esse atributo na classe

    #nome
    #email
    // esses atributos serão privados

    constructor(nome, email, dataNascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.dataNascimento = dataNascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    getEmail() {
        return this.#email
    }

    set nome(nome) {
        if(nome === '') {
            throw new Error('Nome inválido')
        }
        this.#nome = nome
    }

    set email(email) {
        if(!email.includes('@')) {
            throw new Error('Email inválido')
        }
        this.#email = email
    }

    exibirInfos() {
        this.#metodoPrivado()
        // o método privado só pode ser chamado dentro da classe
        return `${this.#nome}, ${this.#email}`
    }

    #metodoPrivado() {
        console.log('Chamando método privado')
    }
}
/*
const novoUser = new User('Luis', 'luis@gmail.com', '26/05/1988')
console.log(novoUser)
console.log(novoUser.exibirInfos())
// a sintaxe de classe usa a herança de prototipagem por baixo dos panos
console.log(User.prototype.isPrototypeOf(novoUser))
 */