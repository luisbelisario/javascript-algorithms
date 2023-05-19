import User from "./User.js";

class Admin extends User {

    constructor(nome, email, dataNascimento, role = 'admin', ativo = true) {
        super(nome, email, dataNascimento, role, ativo)
    }

    criarCurso() {
        console.log('Curso criado!')
    }
}

const novoAdmin = new Admin('Jamerson', 'jamerson@gmail.com', "20211-01-01")
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
novoAdmin.criarCurso()