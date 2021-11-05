const router = require('express').Router();
const controllersRecipes = require('../controllers/recipesControllers');
const middlewareAuth = require('../middlewares/authentication');

router.get('/', controllersRecipes.getAll);
router.get('/:id', controllersRecipes.getById);
router.post('/', middlewareAuth, controllersRecipes.createRecipes);

module.exports = router;