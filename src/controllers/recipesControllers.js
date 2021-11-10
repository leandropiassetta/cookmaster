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

const createRecipe = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesService.createRecipe(name, ingredients, preparation);
  return res.status(201).json(recipe);
});

const editRecipe = rescue(async (req, res) => {
  const { id } = req.params;
  const { payload } = req;
  const { name, ingredients, preparation } = req.body;

  const recipe = await recipesService.editRecipe({ id, name, ingredients, preparation }, payload);

  return res.status(200).json(recipe);
});

const deleteRecipe = rescue(async (req, res) => {
  const { id } = req.params;
  const { payload } = req;
  console.log(payload);
  await recipesService.deleteRecipe(id, payload);

  return res.status(204).end();
});

module.exports = {
  createRecipe,
  getAll,
  getById,
  editRecipe,
  deleteRecipe,
};
