const rescue = require('express-rescue');
const recipesService = require('../services/recipesServices');

const getAll = rescue(async (_req, res) => {
  const recipes = await recipesService.getAll();

  return res.status(200).json(recipes);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const recipe = await recipesService.getById(id);

  return res.status(200).json(recipe);
});

const createRecipes = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesService.createRecipes(name, ingredients, preparation);
  return res.status(201).json(recipe);
});

module.exports = {
  createRecipes,
  getAll,
  getById,
};