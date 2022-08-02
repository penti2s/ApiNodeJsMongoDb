const mongoose = require('mongoose')

const Users = mongoose.model('Users', {
    name: { type: String, required: true, minLength: 4 },
    lastName: { type: String, required: true, minLength: 4 },
})

module.exports = Users