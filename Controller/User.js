const Users = require('../Models/User')

const User = {
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req, res) => {
        const user = new Users(req.body)
        const result = await user.save()
        res.status(200).send(result._id)
    },
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findById(id)
        res.status(200).send(user)
    },
    update: async (req, res) => {
        const { id } = req.params
        await Users.findByIdAndUpdate(id, req.body)
        res.sendStatus(204)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await Users.findByIdAndDelete(id)
        res.sendStatus(200)
    }
}

module.exports = User;