const express = require('express');
const router = express.Router();

const{ createUser } = require('../controllers/userController');
app.post('/' , createUser);

module.exports = router ;