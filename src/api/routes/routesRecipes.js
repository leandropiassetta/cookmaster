const router = require('express').Router();
const controllersRecipes = require('../../controllers/recipesControllers');
const middlewareAuth = require('../../middlewares/authentication');
const upload = require('../../middlewares/uploads');

router.put('/:id/image/', middlewareAuth, upload.single('image'), controllersRecipes.upload);
router.get('/:id', controllersRecipes.getById);
router.put('/:id', middlewareAuth, controllersRecipes.editRecipe);
router.delete('/:id', middlewareAuth, controllersRecipes.deleteRecipe);
router.get('/', controllersRecipes.getAll);
router.post('/', middlewareAuth, controllersRecipes.createRecipe);

module.exports = router;