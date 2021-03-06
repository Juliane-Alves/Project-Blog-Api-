// const service = require('../services/userLoginService');
const userService = require('../services/userService');
// const { Category } = require('../database/models');

const createUser = async (req, res, next) => {
  try {
    const tokenUser = await userService.createUser(req.body);

    return res.status(201).json({ token: tokenUser });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, _next) => {
  const dataUsers = await userService.getUsers();

  return res.status(200).json(dataUsers);
};

const getUserId = async (req, res) => {
  const { id } = req.params;
  const userId = await userService.getUserId(id);
  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userId);
};

const getCategories = async (req, res) => {
  const categorieData = await userService.getCategories();
  return res.status(200).json(categorieData);
};
module.exports = { 
    createUser,
    getUsers,
    getUserId,
    getCategories,
};