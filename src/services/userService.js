const generateJWT = require('../utils/generateJWT');
const { User } = require('../database/models');

const erro = { status: 400, message: '"email" must be a valid email"' };
// tentar cuidar do requisito 4, após, no momento to confusa, erro 500
const createUser = async (payload) => {
    const { email } = payload;
    const userEmail = await User.findOne({ where: { email } }); 
    const user = await User.create(payload);
    const userData = user && user.dataValues;
    
    if (userEmail) throw erro;

    const { _password, ...payload2 } = userData;
    const token = generateJWT(payload2);
  
    return token;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: ['displayName', 'email', 'image'] });

  return users;
};

module.exports = {
  createUser,
  getUsers,
};