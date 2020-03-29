const express = require('express')

const OngControllers = require('./controllers/OngControllers')
const IncidentsControllers = require('./controllers/IncidentControllers')
const ProfileControllers = require('./controllers/ProfileControllers')
const SessionControllers = require('./controllers/SessionControllers')

const routes = express.Router()

routes.post('/sessions', SessionControllers.create)

// Routes Listagem
routes.get('/ongs', OngControllers.index)
routes.post('/ongs', OngControllers.create)

routes.get('/profile', ProfileControllers.index)

routes.get('/incidents', IncidentsControllers.index)
routes.post('/incidents', IncidentsControllers.create)

routes.delete('/incidents/:id', IncidentsControllers.delete)

module.exports = routes
