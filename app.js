const buscaCep = require('./gera_cep.js');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});
/*
app.get('/', async (req, res) => {
    res.send(await buscaCep(req.query.uf, req.query.cod_cidade))
})*/

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

/*
res.send(await buscaCep(req.query.uf, req.query.cod_cidade))*/