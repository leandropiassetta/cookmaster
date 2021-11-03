const rescue = require('express-rescue');
const recipesService = require('../services/recipesServices');

const getAll = async (_req, res) => {
  const recipes = await recipesService.getAll();

  return res.status(200).json(recipes);
};

const createRecipes = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesService.createRecipes(name, ingredients, preparation);
  return res.status(201).json(recipe);
});

module.exports = {
  createRecipes,
  getAll,
};