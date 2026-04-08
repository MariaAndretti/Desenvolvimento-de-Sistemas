const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    nome: { type: String, required: true},
    email: { type: String}
})

module.exports = UserSchema;
