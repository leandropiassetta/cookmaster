const router = require('express').Router();
const controllerLogin = require('../controllers/loginController');

router.post('/', controllerLogin.loginUser);

module.exports = router;