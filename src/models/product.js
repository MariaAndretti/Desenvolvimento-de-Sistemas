const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    nome: { type: String, required: true},
    tipo: { type: String, required: true},
    preco: { type: Number, required: true}
})

module.exports = mongoose.model("Product",ProductSchema);
