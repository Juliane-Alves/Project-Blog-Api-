const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = { // header de configuração 
    expiresIn: '8d',
    algorithm: 'HS256',
  };
  const secretKey = process.env.JWT_SECRET || 'suaSenhaSecreta';
 // função responsavel por gerar o token jwt 
  const generateJWT = (payload) => {
    const token = jwt.sign({ data: payload }, secretKey, jwtConfig);
  
    return token;
  };
  
  module.exports = generateJWT;
