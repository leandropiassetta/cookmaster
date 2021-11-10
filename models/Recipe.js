const { ObjectId } = require('mongodb');
const connect = require('./connection');

const getAll = async () => {
  const db = await connect();
  const recipes = await db.collection('recipes').find().toArray();

  return recipes;
};

const getById = async (id) => {
  const db = await connect();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  return recipe;
};

const createRecipes = async (name, ingredients, preparation) => {
  const db = await connect();
  const recipe = await db.collection('recipes').insertOne({ name, ingredients, preparation });
  
  return { 
    recipe: 
    { name, ingredients, preparation, userId: recipe.insertedId, _id: recipe.insertedId }, 
  };
};

const editRecipe = async ({ id, ingredients, preparation, name }, payload) => {
  const db = await connect();
  await db.collection('recipes').updateOne({ 
    _id: ObjectId(id) }, { $set: { ingredients, preparation, name, userId: payload.id } });

  return { _id: id, name, ingredients, preparation, userId: payload.id };
};

module.exports = {
  createRecipes,
  getAll,
  getById,
  editRecipe,
};