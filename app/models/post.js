'use strict'

let mongoose = require('mongoose')

// Create du schéma Post
let postModel = mongoose.model('Post', new mongoose.Schema({
    title : {
        type: String,
        unique: true
    },
    author: {
        type: String
    },
    PublishedAt: {
        type: Number
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))

module.exports = postModel
