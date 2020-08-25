module.exports = function (app) {
    const usuarios = require('../controllers/tarefasController')
    app.route('/tarefas')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}