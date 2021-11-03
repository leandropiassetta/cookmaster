const connect = require('./connection');

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
};