const { verifyToken } = require('../auth/jwt');
const clientError = require('../utils/clientError');

const authentication = (req, _res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
      throw clientError.unauthorized('missing auth token');
  }

  try {
    const payload = verifyToken(authorization);
    req.payload = payload; // carregar essa informação pra usar la na frente.
    } catch (_e) {
      throw clientError.unauthorized('jwt malformed');
    }
    
  next();
};

module.exports = authentication;