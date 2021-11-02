// const { checkEmail } = require('./users');

const checkFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

// checkEmailAndPasswordValid = (req, res, next) => {
//   const { email, password } = req.body;
// };

module.exports = {
  checkFields,
};