'use strict'
let mongoose = require('mongoose')

let userModel = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}))

module.exports = userModel
