const express = require('express');
const path = require('path').resolve('./');

const app = express();

const routesUser = require('./routes/routesUsers');
const routesLogin = require('./routes/routeLogin');
const routesRecipes = require('./routes/routesRecipes');
const middlewareError = require('../middlewares/error');

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(express.json());
app.use('/images', express.static(`${path}/src/uploads`));

app.use('/users', routesUser);
app.use('/login', routesLogin);
app.use('/recipes', routesRecipes);
app.use(middlewareError);

module.exports = app;
