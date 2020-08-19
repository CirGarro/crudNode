exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste@hotmail.com'
        },
        {
            nome: 'teste 02',
            email: 'teste02@hotmail.com'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: "Usuario criado com sucesso",
        data: req.body
    }
    res.send(response)
}