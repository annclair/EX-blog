'use strict'
let PostsController = require('../controllers/PostsController')

module.exports = (app)=> {

let ctrl = new PostsController()

app.get('/posts', (req, res, next) => {
    return ctrl.find(req,res,next)
})

app.get('/posts/:id', (req, res, next) => {
    return ctrl.findById(req,res,next)
})

app.post('/posts', (req, res, next) => {
    return ctrl.create(req,res,next)
})

app.put('/posts/:id', (req, res, next) => {
    return ctrl.update(req,res,next)
})

app.delete('/posts/:id', (req, res, next) => {
    return ctrl.delete(req,res,next)
})
}
