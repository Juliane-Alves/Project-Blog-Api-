const service = require('../services/userLoginService');
const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const tokenUser = await service.createUser(displayName, email, password, image);

    return res.status(201).json({ token: tokenUser });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, _next) => {
  const dataUsers = await userService.getUsers();

  return res.status(200).json(dataUsers);
};

module.exports = { 
    createUser,
    getUsers,
};