'use strict'
let Controller = require('./Controller')
const BLOG = require('../models/blog')  // on ne peut pas modifier le model

class BlogsController extends Controller {

    constructor(){
        super(BLOG) //fait appel au constructeur de la classe parente
    }
}

module.exports = BlogsController
