const mongoose = require('mongoose')

var Movimento = require('../models/movimento')


module.exports.listar = () => {
    return Movimento
        .find({}, {})
        .sort({ Data: 1 })
        .exec()
}

module.exports.listarByTipo = tp => {
    return Movimento
        .find({ Tipo: tp }, {})
        .exec()
}

module.exports.listarEntidade = () => {
    return Movimento
        .aggregate([
            { $group: { _id: "$Entidade", total: { $push: "$Valor" } } }, {
                $project: {
                    _id: 0,
                    entidade: "$_id",
                    total: "$total"
                }
            }
        ])
        .exec()
}

module.exports.update = function(data, num, tp, val, ent, desc) {
    return Movimento
        .updateOne({}, { Numero: num, Tipo: tp, Data: data, Valor: val, Entidade: ent, Descricao: desc })
        .exec()
}