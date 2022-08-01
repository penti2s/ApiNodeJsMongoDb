const express = require('express')
const user = require('./Controller/User')
const app = express()
const port = 3000

app.get('/', user.list)

app.get('/:id', user.get)

app.put('/:id', user.create)

app.patch('/:id', user.update)

app.delete('/:id', user.delete)

app.listen(port, ()=> {
    console.log('Server inicializado')
})