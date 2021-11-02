const usersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  const newUser = await usersService.createUser(email, password, name);

  return res.status(201).json(newUser);
};

module.exports = {
  createUser,
};