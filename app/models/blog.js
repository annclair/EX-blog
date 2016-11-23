'use strict'

let mongoose = require('mongoose')
// Create du schéma Blog
let blogModel = mongoose.model('Blog', new mongoose.Schema({
    title : {
        type: String,
        unique: true
    },
    // author: {
    //     type: String
    // },
    PublishedAt: {
        type: Number
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))

module.exports = blogModel
