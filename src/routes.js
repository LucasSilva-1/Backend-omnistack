const { Router } = require('express');
const DevControllers = require('./controllers/DevControllers');
const SearchControllers = require('./controllers/SearchControllers');

const routes = Router();

routes.get('/devs', DevControllers.index);

routes.post('/devs', DevControllers.Store);
routes.get('/Search', SearchControllers.index);

module.exports = routes;