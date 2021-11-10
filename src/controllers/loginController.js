const rescue = require('express-rescue');
const usersService = require('../services/loginService');

const loginUser = rescue(async (req, res, _next) => {
    const { email, password } = req.body;

    const token = await usersService.loginUser(email, password);
  
    return res.status(200).json({ token });
});

module.exports = {
  loginUser,
};