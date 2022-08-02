const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://penti:pentiApiRest@cluster0.yse1t.mongodb.net/appApi?retryWrites=true&w=majority')

//Creando Modelo de datos
const User = mongoose.model('User', {
    username: String,
    edad: Number,
    email: String,
})

//Agregando usuario al modelo
const user = async () => {
    const user = new User({
        username: 'Penti',
        edad: 25,
        email: 'test@test.cl',})
    const savedUser = await user.save()
    console.log(savedUser)
}

user()