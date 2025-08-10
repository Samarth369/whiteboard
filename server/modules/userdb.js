const mongoose = require('mongoose')

const user = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const userdb = mongoose.model( 'user' , user )

module.exports = userdb