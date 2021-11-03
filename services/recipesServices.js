const clientError = require('../utils/clientError');
const recipesModels = require('../models/Recipe');

const createRecipes = async (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
    throw clientError.badRequest('Invalid entries. Try again.');
  }
  const recipe = await recipesModels.createRecipes(name, ingredients, preparation);
  return recipe;
};

module.exports = {
  createRecipes,
};