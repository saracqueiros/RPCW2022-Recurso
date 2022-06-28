var express = require('express');
var router = express.Router();
const Fracao = require('../controllers/fracao')
const Pagamento = require('../controllers/pagamento')
const Movimento = require('../controllers/movimento')



//GET /api/movimentos - Devolve a lista de movimentos, com todos os campos;
/*GET /api/movimentos?groupBy=tipo - Devolve a lista de movimentos
 de um determinado tipo (receita ou despesa);*/

/*  GET /api/movimentos?groupBy=entidade - 
Devolve a lista de entidades, indicando para cada uma, 
quanto se recebeu (se for uma fração do condomínio) ou 
quanto se pagou (se for um fornecedor);
*/


router.get('/api/movimentos', function(req, res, next) {
    if (req.query.groupBy != null) {
        if (req.query.groupBy == "entidade") {
            Movimento.listarEntidade()
                .then(dados => res.status(200).jsonp(dados))
                .catch(e => res.status(500).jsonp({ error: e }))
        } else {
            Movimento.listarByTipo(req.query.groupBy)
                .then(dados => res.status(200).jsonp(dados))
                .catch(e => res.status(500).jsonp({ error: e }))
        }
    } else {
        Movimento.listar()
            .then(dados => res.status(200).jsonp(dados))
            .catch(e => res.status(500).jsonp({ error: e }))
    }

});


router.get('/api/pagamentos/:id', function(req, res, next) {
    Pagamento.listarPagamentos(req.params.id)
        .then(dados => {
            console.log(dados.Jan)
            let pago = 0
            let dever = 0
            list = []

            if (dados.Jan == 1) {
                pago += 1
                list.push('Jan')
            } else {
                dever += 1
            }
            if (dados.Fev == 1) {
                pago += 1
                list.push('Fev')
            } else {
                dever += 1
            }
            if (dados.Mar == 1) {
                pago += 1
                list.push('Mar')
            } else {
                dever += 1
            }
            if (dados.Abr == 1) {
                pago += 1
                list.push('Abr')
            } else {
                dever += 1
            }
            if (dados.Mai == 1) {
                pago += 1
                list.push('Mai')
            } else {
                dever += 1
            }
            if (dados.Jun == 1) {
                pago += 1
                list.push('Jun')
            } else {
                dever += 1
            }
            if (dados.Jul == 1) {
                pago += 1
                list.push('Jul')
            } else {
                dever += 1
            }
            if (dados.Ago == 1) {
                pago += 1
                list.push('Ago')
            } else {
                dever += 1
            }
            if (dados.Set == 1) {
                pago += 1
                list.push('Set')
            } else {
                dever += 1
            }
            if (dados.Out == 1) {
                pago += 1
                list.push('Out')
            } else {
                dever += 1
            }
            if (dados.Nov == 1) {
                pago += 1
                list.push('Nov')
            } else {
                dever += 1
            }
            if (dados.Dez == 1) {
                pago += 1
                list.push('Dez')
            } else {
                dever += 1
            }

            obj = {
                id: dados.Fracao,
                meses_pagos: list,
                total_meses_pagos: pago,
                total_meses_dever: dever
            }
            res.status(200).jsonp(obj)

        })
        .catch(e => res.status(500).jsonp({ error: e }))
});

/*GET /api/pagamentos - Devolve a lista de pagamentos; */
router.get('/api/pagamentos', function(req, res, next) {
    Pagamento.listar()
        .then(dados => res.status(200).jsonp(dados))
        .catch(e => res.status(500).jsonp({ error: e }))
});

//POST /api/movimentos - Acrescenta um novo movimento;
router.post('/api/movimentos', function(req, res, next) {
    Movimento.update(req.body.data, req.body.numero, req.body.tipo, req.body.valor, req.body.ent, req.body.desc)
        .then(dados => res.status(200).jsonp([dados, req.level]))
        .catch(e => res.status(500).jsonp({ error: e }))

});
router.post('/api/pagamentos', function(req, res, next) {
    Pagamento.update(req.body.fracao, req.body.jan, req.body.fev, req.body.mar, req.body.abr, req.body.mai, req.body.jun, req.body.jul, req.body.ago, req.body.set, req.body.out, req.body.nov, req.body.dez)
        .then(dados => res.status(200).jsonp([dados, req.level]))
        .catch(e => res.status(500).jsonp({ error: e }))

});

module.exports = router;