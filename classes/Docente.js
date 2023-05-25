import User from "./User.js";

export default class Docente extends User {

    constructor(nome, email, dataNascimento, role = 'docente', ativo = true) {
        super(nome, email, dataNascimento, role, ativo)
    }

    aprovaEstudante() {
        console.log('Estudante aprovado!')
    }
}

const novoDocente = new Docente('Bismark', 'bismark@gmail.com', '2021-01-01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
novoDocente.aprovaEstudante()