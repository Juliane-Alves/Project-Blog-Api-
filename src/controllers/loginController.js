const service = require('../services/userLoginService');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await service.userLogin(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { 
    userLogin,
};