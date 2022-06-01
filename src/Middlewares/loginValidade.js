// const { User } = require('../database/models/user');

const HTTP_ERROR = 400;
const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password || password.length < 6) { 
    return res.status(HTTP_ERROR).json({ message: 'Some required fields are missing' });
  }

   next(); 
};

module.exports = validateLogin; 