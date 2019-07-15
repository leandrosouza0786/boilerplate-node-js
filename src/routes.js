const express = require('express')

const routes = express.Router()

const controller = require('./app/controllers')
const Teste = require('./app/controllers/Teste')

routes.get('/', Teste.metodoTeste)

module.exports = routes
