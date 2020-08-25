const mongoose = require('mongoose')
const Tarefa = mongoose.model('Tarefas')

exports.listAll = (req, res) => {
    Tarefa.find({}, (err, tarefas) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Lista de tarefas',
            data: tarefas
        }
        res.send(response)
    })
}

exports.createOne = (req, res) => {
    const { descricao, status } = req.body
    let novaTarefa = new Tarefa({ descricao, status })
    novaTarefa.save((error, tarefa) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'tarefa cadastrada com sucesso',
            data: tarefa
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Tarefa.findById(req.params.id, (err, tarefa) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Listagem efetuada com sucesso!',
            data: tarefa
        }
        res.status(201).json(response)
    })
}

exports.update = (req, res) => {
    Tarefa.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, tarefa) => {
            if (err) {
                res.send(err)
            }
            res.send(tarefa)
        })
}

exports.delete = (req, res) => {
    Tarefa.remove({ _id: req.params.id }, (err, tarefa) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: "tarefa Deletada com sucesso!",
            data: tarefa
        }
        res.send(response)
    })
}