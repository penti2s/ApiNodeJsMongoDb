const express = require('express')
const mongoose = require('mongoose');
const user = require('./Controller/User')
const app = express()
const port = 3000

app.use(express.json()) // para que se puedan recibir datos en formato json
mongoose.connect('mongodb+srv://penti:pentiApiRest@cluster0.yse1t.mongodb.net/appApi?retryWrites=true&w=majority')

app.get('/', user.list)

app.post('/', user.create)

app.get('/:id', user.get)

app.put('/:id', user.create)

app.patch('/:id', user.update)

app.delete('/:id', user.delete)

app.listen(port, ()=> {
    console.log('Server inicializado')
})