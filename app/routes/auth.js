'use strict'
let Authentification = require('../middlewares/authentification')
let UsersController = require('../controllers/UsersController')

module.exports = (app, passport) => {

    let ctrl = new UsersController()

    app.post('/auth', Authentification.local)
}
