const express = require('express');
const authController = require('./controllers/authController');
const app = express();

app.use(express.json());

//auth routes
app.use('/api/auth', authController);

module.exports = app;