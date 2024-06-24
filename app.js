const buscaCep = require('./gera_cep.js');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 10546;

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

/*
res.send(await buscaCep(req.query.uf, req.query.cod_cidade))*/