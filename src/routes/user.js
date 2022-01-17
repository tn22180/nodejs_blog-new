const express = require('express');

const router = express.Router();

const userController = require('../app/controllers/UserController');

router.post('/store', userController.store);

router.use('/create', userController.create);

router.post('/handle-form-action', userController.handleFormAction);

router.post('/handle-form-action-bin', userController.handleFormActionBin);

router.use('/:id/edit', userController.edit);

router.put('/:id', userController.update);

router.patch('/:id/restore', userController.restore);

router.delete('/:id', userController.destroy);

router.delete('/:id/force', userController.forceDestroy);

router.use('/:slug', userController.show);

module.exports = router;
