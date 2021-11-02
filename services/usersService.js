const usersModel = require('../models/User');

const createUser = async (email, password, name) => {
  const newUser = await usersModel.createUser(email, password, name);

  return newUser;
};

const getEmail = async (email) => {
  const verifyEmail = await usersModel.getEmail(email);

  return verifyEmail;
};

module.exports = {
  createUser,
  getEmail,
};