const mongoose = require('mongoose')

var pagamentoSchema = new mongoose.Schema({
    _id: String,
    Fracao: String,
    Jan: Number,
    Fev: Number,
    Mar: Number,
    Abr: Number,
    Mai: Number,
    Jun: Number,
    Jul: Number,
    Ago: Number,
    Set: Number,
    Out: Number,
    Nov: Number,
    Dez: Number

});

module.exports = mongoose.model('pagamentos', pagamentoSchema)