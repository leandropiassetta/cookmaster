const router = require('express').Router();
const controllersRecipes = require('../../controllers/recipesControllers');
const middlewareAuth = require('../../middlewares/authentication');
const upload = require('../../middlewares/uploads');

router.get('/', controllersRecipes.getAll);
router.get('/:id', controllersRecipes.getById);
router.post('/', middlewareAuth, controllersRecipes.createRecipe);
router.put('/:id', middlewareAuth, controllersRecipes.editRecipe);
router.put('/:id/image/', middlewareAuth, upload.single('image'), controllersRecipes.upload);
router.delete('/:id', middlewareAuth, controllersRecipes.deleteRecipe);

module.exports = router;