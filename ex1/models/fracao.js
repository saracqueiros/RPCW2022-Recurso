const mongoose = require('mongoose')

var fracaoSchema = new mongoose.Schema({
    _id: String,
    Fracao: String,
    Permilagem: Number,
    Mensalidade: Number,

});

module.exports = mongoose.model('fracoes', fracaoSchema)