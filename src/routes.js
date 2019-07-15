const express = require('express')

const routes = express.Router()

const controller = require('./app/controllers')

routes.get('/teste', controllers.index)

module.exports = routes
