const usersService = require('../services/loginService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await usersService.loginUser(email, password);
  
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};