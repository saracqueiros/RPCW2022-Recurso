const mongoose = require('mongoose')

var movimentoSchema = new mongoose.Schema({
    _id: String,
    Numero: String,
    Tipo: String,
    Data: String,
    Valor: Number,
    Entidade: String,
    Descricao: String

});

module.exports = mongoose.model('movimentos', movimentoSchema)