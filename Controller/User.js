const User = {
    list: (req, res) => {
        res.status(200).send('Lista de usuarios')
    },
    create: (req, res) => {
        res.status(200).send('Crear usuario')
    },
    get: (req, res) => {
        res.status(200).send('Obtener usuario')
    },
    update: (req, res) => {
        res.status(200).send('Actualizar un usuario')
    },
    delete: (req, res) => {
        res.status(200).send('Eliminar un usuario')
    }
}

module.exports = User;