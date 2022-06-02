const express = require('express');
const loginController = require('./controllers/loginController');
const validateLogin = require('./Middlewares/loginValidade');
const userController = require('./controllers/userCotroller');
const { validateUserDisplay, validadePassUser } = require('./Middlewares/userValidate');
const validateToken = require('./Middlewares/validateToken');
const errorMiddlware = require('./Middlewares/erroMiddleware');

// ...

const app = express();

app.use(express.json());

// ...
// Endpoint login post 
app.post('/login', validateLogin, loginController.userLogin);

// Endpoint user post 
app.post('/user', validateUserDisplay, validadePassUser, userController.createUser);

// endpoint getUser 
app.get('/user', validateToken, userController.getUsers);

app.use(errorMiddlware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
