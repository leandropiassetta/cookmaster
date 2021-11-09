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

const createRecipes = async (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
    throw clientError.badRequest('Invalid entries. Try again.');
  }

  const recipe = await recipesModels.createRecipes(name, ingredients, preparation);

  return recipe;
};

module.exports = {
  createRecipes,
  getAll,
  getById,
};