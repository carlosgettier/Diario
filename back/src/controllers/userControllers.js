const { sequelize } = require("../database/models")
const db = require("../database/models")
const fs = require('fs');
const path = require("path")

let userControllers = {
    all: async (req, res) => {
        const todos = await db.user.findAll()
        res.json(todos)

    },
    agregar: async (req, res) => {

        const todos = await db.user.create({
            nombre: req.body.nombre,
            password: req.body.password,
            email: req.body.email
        })
        res.json(todos)

    }
}
module.exports = userControllers;