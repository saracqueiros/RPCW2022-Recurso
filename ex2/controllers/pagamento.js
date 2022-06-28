const mongoose = require('mongoose')

var Pagamento = require('../models/pagamento')


module.exports.listar = () => {
    return Pagamento
        .find({}, {})
        .exec()
}

/*GET /api/pagamentos/:id - 
Devolve a lista de pagamentos da fração id, 
indicando os meses pagos, o total pago e o total em dívida;*/

module.exports.listarPagamentos = id => {
    return Pagamento
        .findOne({ Fracao: id }, { _id: 0 })
        .exec()
}



module.exports.update = function(fr, jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez) {
    return Pagamento
        .updateOne({}, { Fracao: fr, Jan: jan, Fev: fev, Mar: mar, Abr: abr, Mai: mai, Jun: jun, Jul: jul, Ago: ago, Set: set, Out: out, Nov: nov, Dez: dez })
        .exec()
}