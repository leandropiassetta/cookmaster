const usersService = require('../services/usersService');

const checkValidFields = (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  const verifyEmail = await usersService.getUserByEmail(email);

  if (!validEmail) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  
  if (verifyEmail) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  next();
};

module.exports = {
  checkValidFields,
  checkEmail,
};