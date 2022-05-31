const express = require('express');
const errorMiddlware = require('./Middlewares/erroMiddleware');

// ...

const app = express();

app.use(express.json());

// ...
// Endpoint login post 
app.post('/login');
app.use(errorMiddlware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
