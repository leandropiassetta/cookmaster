const connect = require('./connection');

const getAll = async () => {
  const db = await connect();
  const recipes = await db.collection('recipes').find().toArray();

  return recipes;
};

const createRecipes = async (name, ingredients, preparation) => {
  const db = await connect();
  const recipe = await db.collection('recipes').insertOne({ name, ingredients, preparation });
  
  return { 
    recipe: 
    { name, ingredients, preparation, userId: recipe.insertedId, _id: recipe.insertedId }, 
  };
};

module.exports = {
  createRecipes,
  getAll,
};