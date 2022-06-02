const { User } = require('../database/models');

const validateUserDisplay = (req, res, next) => {
    const { displayName, email } = req.body;
    if (displayName.length < 8) {
     return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
   if (!email || !email.includes('@') || !email.includes('.com')) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validadePassUser = async (req, res, next) => {
    const { password, email } = req.body;
    if (password.length < 6) { 
        return res.status(400).json({
          message: '"password" length must be at least 6 characters long',
        });
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
       return res.status(409).json({ message: 'User already registered' });
    }
  return next();
};

module.exports = {
    validateUserDisplay,
    validadePassUser,
};