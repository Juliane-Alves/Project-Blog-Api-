const jwt = require('jsonwebtoken');

const jwtConfig = { // header de configuração 
    expiresIn: '8d',
    algorithm: 'HS256',
  };
 // função responsavel por gerar o token jwt 
  const generateJWT = (payload) => {
    const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);
  
    return token;
  };
  
  module.exports = generateJWT;
