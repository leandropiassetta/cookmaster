// const { ObjectId } = require('mongodb');
const connect = require('./connection');

const createUser = async (email, password, name) => {
  const db = await connect();
  const newUser = await db.collection('users').insertOne({ email, password, name, role: 'user' });

  return { user: { name, email, role: 'user', _id: newUser.insertedId } };
};

const getUserByEmail = async (email) => {
  const db = await connect();
  const user = await db.collection('users').findOne({ email });

  return user;
};

const getPassword = async (password) => {
  const db = await connect();
  const verifyPassword = await db.collection('users').findOne({ password });

  return verifyPassword;
};

module.exports = {
  createUser,
  getUserByEmail,
  getPassword,
};