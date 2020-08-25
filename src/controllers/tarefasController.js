exports.listAll = (req, res) => {
    let tarefas = [
        {
            nome: 'test01',
            email: 'teste01@123.com'
        },
        {
            nome: 'teste02',
            email: 'teste02@123.com'
        }
    ]
    res.send(tarefas)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'tarefa cadastrada com sucesso',
        data: req.body
    }
    res.status(201).json(response)
}