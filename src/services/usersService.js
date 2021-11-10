const usersModel = require('../models/User');

const createUser = async (email, password, name) => {
  const newUser = await usersModel.createUser(email, password, name);

  return newUser;
};

const getUserByEmail = async (email) => {
  const verifyUserByEmail = await usersModel.getUserByEmail(email);

  return verifyUserByEmail;
};

const getPassword = async (password) => {
  const verifyPassword = await usersModel.getPassword(password);

  return verifyPassword;
};

module.exports = {
  createUser,
  getUserByEmail,
  getPassword,
};