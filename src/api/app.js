const express = require('express');

const app = express();

const routesUser = require('../../routes/routesUsers');
const routesLogin = require('../../routes/routeLogin');
const middlewareError = require('../../middlewares/error');

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(express.json());
app.use('/users', routesUser);
app.use('/login', routesLogin);
app.use(middlewareError);

module.exports = app;
