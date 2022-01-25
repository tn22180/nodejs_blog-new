const express = require('express');

const router = express.Router();

const authController = require('../app/controllers/AuthenticationController');

router.post('/login', authController.postLogin);

router.use('/login', authController.login);


module.exports = router;
