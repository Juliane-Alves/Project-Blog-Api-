const express = require('express');
const loginController = require('./controllers/loginController');
const validateLogin = require('./Middlewares/loginValidade');
const userController = require('./controllers/userCotroller');
const { validateUserDisplay, validadePassUser } = require('./Middlewares/userValidate');
const postController = require('./controllers/postController');
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

// endpoint user por id get 
app.get('/user/:id', validateToken, userController.getUserId);

// endpoint get categories
app.get('/categories', validateToken, userController.getCategories);

// endpoint get get post
app.get('/post', validateToken, postController.getPosts);

// endpoint get post id 
app.get('/post/:id', validateToken, postController.getPostId);

app.use(errorMiddlware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
