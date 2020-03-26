const express = require('express');


const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const connection = require('./database/connection')

const routes = express.Router()

// Login
routes.post('/sessions', SessionController.create)

// Listar ongs
routes.get('/ongs', OngController.index);

// Cadastrar ongs no BD
routes.post('/ongs', OngController.create);

// Criar incidentes no BD
routes.post('/incidents', IncidentController.create)

// lista incidentes
routes.get('/incidents', IncidentController.index)

// incidente que a ong quer deletar
routes.delete('/incidents/:id', IncidentController.delete)

// listar incidentes especificos
routes.get('/profile', ProfileController.index)

module.exports = routes;