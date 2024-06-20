const express = require('express')
const buscaCep = require('./gera_cep.js');


const app = express()
const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
    res.send(await buscaCep(req.query.uf, req.query.cod_cidade))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})