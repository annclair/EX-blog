'use strict'
let Controller = require('./Controller')
const POST = require('../models/post')  // on ne peut pas modifier le model

class PostsController extends Controller {

    constructor(){
        super(POST) //fait appel au constructeur de la classe parente
    }
}

module.exports = PostsController
