const rescue = require('express-rescue');
const recipesService = require('../services/recipesServices');

const createRecipes = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesService.createRecipes(name, ingredients, preparation);
  return res.status(201).json(recipe);
});

module.exports = {
  createRecipes,
};