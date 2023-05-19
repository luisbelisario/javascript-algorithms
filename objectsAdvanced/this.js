const user = {
    nome: "Luis",
    email: "luis@email.com",
    nascimento: "1988/05/26",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// O metodo bind
// Esse metodo "amarra" o contexto de uma função a um determinado objeto

const exibir = user.exibirInfos
exibir()
// Aqui a funcao exibir esta referenciando a funcao exibirInfos do objeto acima, mas o this não esta determinado por isso mostra undefined

const exibirBind = exibir.bind(user)
exibirBind()
// Aqui esou amarrando exibir ao contexto de user e atribuindo isso a variavel exibirBind, portanto a funcao passa a referenciar as propriedades do objeto user
// Como não fiz o bind com a const exibir ao chamar a funcao exibir() continuara exibindo undefined