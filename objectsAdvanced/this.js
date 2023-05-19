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

// O método bind
// Esse método "amarra" o contexto de uma função a um determinado objeto

const exibir = user.exibirInfos
exibir()
// Aqui a função exibir esta referenciando a função exibirInfos do objeto acima, mas o this não está determinado por isso mostra undefined

const exibirBind = exibir.bind(user)
exibirBind()
// Aqui estou amarrando exibir ao contexto de user e atribuindo isso a variável exibirBind, portanto a
// função passa a referenciar as propriedades do objeto user
// Como não fiz o bind com a const exibir ao chamar a função exibir() continuara exibindo undefined