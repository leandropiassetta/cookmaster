const router = require('express').Router();
const controllersUsers = require('../../controllers/usersControllers');
const middlewares = require('../../middlewares/users');

const createMiddlewares = [
  middlewares.checkValidFields,
  middlewares.checkEmail,
];

router.post('/', createMiddlewares, controllersUsers.createUser);

module.exports = router;