const clientError = require('../utils/clientError');
const recipesModels = require('../models/Recipe');

const getAll = async () => {
  const recipes = await recipesModels.getAll();

  return recipes;
};

const getById = async (id) => {
  if (id.length < 24) {
    throw clientError.notFound('recipe not found');
  }

  const recipe = await recipesModels.getById(id);

  if (!recipe) {
    throw clientError.notFound('recipe not found');
  }

  return recipe;
};

const createRecipe = async (id, name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
    throw clientError.badRequest('Invalid entries. Try again.');
  }

  const recipe = await recipesModels.createRecipe(id, name, ingredients, preparation);

  return recipe;
};

const editRecipe = async ({ id, ingredients, preparation, name }, payload) => {
  const recipe = await recipesModels.editRecipe({ id, ingredients, preparation, name }, payload);

  return recipe;
};

const deleteRecipe = async (id, payload) => {
  const { _id } = payload;
  const userById = await recipesModels.getById(_id);

  if (userById) {
    const recipe = await recipesModels.deleteRecipe(id);
  
    return recipe;
  }
};

const upload = async (id, image) => {
  if (id && image) {
    await recipesModels.addImage(id, image);
  }
  const recipe = await recipesModels.getById(id);
  console.log(recipe);
  return recipe;
};

module.exports = {
  createRecipe,
  getAll,
  getById,
  editRecipe,
  deleteRecipe,
  upload,
};