const router = require('express').Router();
const controllersRecipes = require('../controllers/recipesControllers');
const middlewareAuth = require('../middlewares/authentication');

router.post('/', middlewareAuth, controllersRecipes.createRecipes);

module.exports = router;