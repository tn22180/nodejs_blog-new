const express = require('express');

const router = express.Router();

const cartController = require('../app/controllers/CartController');

router.use('/add/:id', cartController.add);

module.exports = router;
