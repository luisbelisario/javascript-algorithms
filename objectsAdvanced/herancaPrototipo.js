const user = {
    nome: "Luis",
    email: "luis@email.com",
    nascimento: "1988/05/26",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Natassia",
    email: "natasia@email.com",
    role: "admin",
    ativo: true,
    criarCurso: function () {
        console.log("Curso criado")
    }
}

// Ao setar admin como protótipo de user faço com que admin herde todas as propriedades e funções de user
Object.setPrototypeOf(admin, user)
admin.exibirInfos()
admin.criarCurso()