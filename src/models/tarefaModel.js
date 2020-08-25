const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarefaSchema = new Schema({
    descricao: {
        type: String,
        required: 'Favor informar a descrição da tarefa'
    },
    status: {
        type: String,
        required: 'Favor informe qual é o status da Tarefa!'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tarefas', TarefaSchema)