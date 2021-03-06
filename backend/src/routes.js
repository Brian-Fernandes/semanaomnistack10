const { Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//tipos de parâmetros: 
//Query Params:  req.query(Filtros, ordenação, paginação, ...)
//Route Params:  req.params (Identificar um recurso na alteração ou remoção)  
//Body: req.body (Dados para criação ou alteração de um registro)
routes.post('/devs', DevController.store);
routes.get('/devs',DevController.index);
routes.put('/devs', DevController.update);
routes.get('/search',SearchController.index);
module.exports = routes;