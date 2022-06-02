const generateJWT = require('../utils/generateJWT');
const { User } = require('../database/models');
const { Category } = require('../database/models');

const erro = { status: 409, message: 'User already registered' };
const createUser = async (payload) => {
    const { email } = payload;
    const userEmail = await User.findOne({ where: { email } }); 
    
    if (userEmail) throw erro;
    const user = await User.create(payload);

    const { _password, ...payload2 } = user;
    const token = generateJWT(payload2);
  
    return token;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: ['displayName', 'email', 'image'] });

  return users;
};

const getUserId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return false;
  return user;
};

const getCategories = async () => {
  const categorieData = await Category.findAll();
  return categorieData;
};

module.exports = {
  createUser,
  getUsers,
  getUserId,
  getCategories,
};