const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Primer Get')
})

app.get('/:id', (req, res) => {
    res.status(200).send('Get con parametro ' + req.params.id)
})

app.put('/:id', (req, res) => {
    res.sendStatus(204)
})

app.patch('/:id', (req, res) => {
    res.sendStatus(204)
})

app.delete('/:id', (req, res) => {
    res.sendStatus(204)
})

app.listen(port, ()=> {
    console.log('Server inicializado')
})