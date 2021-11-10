const usersModel = require('../models/User');
const { createToken /* verifyToken */ } = require('../api/auth/jwt');
const clientError = require('../utils/clientError');

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw clientError.unauthorized('All fields must be filled');
  }

  const verifyUser = await usersModel.getUserByEmail(email);
  
  if (!verifyUser) {
    throw clientError.unauthorized('Incorrect username or password');
  }
  
  if (verifyUser.password === password) {
    const { _id: id } = verifyUser;
    
    const token = createToken({
      id, email: verifyUser.email, role: verifyUser.role, 
    });
  
    return token;
  } 
    throw clientError.unauthorized('Incorrect username or password');
};

module.exports = {
  loginUser,
};