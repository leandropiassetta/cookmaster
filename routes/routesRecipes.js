const router = require('express').Router();
const controllersRecipes = require('../controllers/recipesControllers');
const middlewareAuth = require('../middlewares/authentication');

router.get('/', controllersRecipes.getAll);
router.get('/:id', controllersRecipes.getById);
router.put('/:id', middlewareAuth, controllersRecipes.editRecipe);
router.post('/', middlewareAuth, controllersRecipes.createRecipes);

module.exports = router;