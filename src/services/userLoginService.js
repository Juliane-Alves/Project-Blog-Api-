const generateJWT = require('../utils/generateJWT');
const { User } = require('../database/models');

const erro = { status: 400, message: 'Invalid fields' };

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } }); // Busca o usuario por email

  const userData = user && user.dataValues;

  if (!user || userData.password !== password) throw erro;
  const { _password, ...payload } = userData;

  const login = generateJWT(payload);
  return login;
};

module.exports = { 
  userLogin,
};
