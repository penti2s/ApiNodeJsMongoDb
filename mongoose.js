const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.URL_DB)

//Creando Modelo de datos
const User = mongoose.model('User', {
    username: String,
    edad: Number,
    email: String,
})

//Agregando usuario al modelo
const user = async () => {
    const user = new User({
        username: 'Penti de prueba 2',
        edad: 26,
        email: 'test2@test.cl',})
    const savedUser = await user.save()
    console.log(savedUser)
}
//user()

// Buscar todo dentro de un modelo Mongoose

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
buscarTodo()


// Buscar por nombre 
const buscarPorNombre = async () => {
    const users = await User.find({username: 'Penti de prueba 2'})
    console.log(users)
}
//buscarPorNombre()


const buscarUno = async () => {
    const user = await User.findOne({username: 'Penti de prueba 2'})
    console.log(user)
}
//buscarUno()

const actualizarUno = async () => {
    const user = await User.findOneAndUpdate({_id: '62e92e350efb04408a216a25'}, {edad: 30}, {new: true})
    console.log(user)
}
//actualizarUno()

const eliminarUno = async() => {
    const user = await User.findOneAndDelete({_id: '62e92e350efb04408a216a25'})
    console.log(user)
}
//eliminarUno()