const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Tarefa = require('./src/models/tarefaModel')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tarefaCrudMongoDb', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/tarefasRoutes')

routes(app)

app.route('/').get((req, res) => {
    res.send('acessou API')
})

const port = 3000
app.listen(port)

console.log('Aplicação iniciada na porta: ', port)