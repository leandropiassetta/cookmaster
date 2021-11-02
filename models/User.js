// const { ObjectId } = require('mongodb');
const connect = require('./connection');

const createUser = async (email, password, name) => {
  const db = await connect();
  const newUser = await db.collection('users').insertOne({ email, password, name, role: 'user' });

  return { user: { name, email, role: 'user', _id: newUser.insertedId } };
};

const getEmail = async (email) => {
  const db = await connect();
  const verifyemail = await db.collection('users').findOne({ email });

  return verifyemail;
};

module.exports = {
  createUser,
  getEmail,
};