const jwt = require('jsonwebtoken');

const secret = 'abracadabra';

const createToken = (user) => {
  const payload = { ...user };

  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { 
  createToken,
  verifyToken,
};