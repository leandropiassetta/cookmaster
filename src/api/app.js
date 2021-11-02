const express = require('express');

const app = express();
app.use(express.json());

const routesUser = require('../../routes/routesUsers');
const routesLogin = require('../../routes/routeLogin');

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', routesUser);
app.use('/login', routesLogin);

module.exports = app;
