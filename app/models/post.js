'use strict'

let mongoose = require('mongoose')

// Create du schéma Post
let postModel = mongoose.model('Post', new mongoose.Schema({
    title : {
        type: String,
        unique : true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    // PublishedAt: {
    //     type: Number
    // },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}))

module.exports = postModel
