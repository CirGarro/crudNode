const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/usuario')

routes(app)

app.route('/').get((req, res) => {
    res.send('API crudnode funcionando')
})

const port = process.env.PORT || 3001

app.listen(port)

console.log('servidor funcionando, na porta :', port)