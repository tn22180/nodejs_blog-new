const express = require('express');

const path = require('path')

const multer  = require('multer');

const router = express.Router();

const userController = require('../app/controllers/UserController');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, path.resolve(__dirname, '../public/img')); 
       
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); // mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})

const upload = multer({storage:storage});

// const upload = multer( { dest: '../public/img/' } )

router.post('/store', upload.single('img'), userController.store);

router.use('/create',  userController.create);

router.use('/search', userController.search);

router.post('/handle-form-action', userController.handleFormAction);

router.post('/handle-form-action-bin', userController.handleFormActionBin);

router.use('/:id/edit', userController.edit);

router.put('/:id', userController.update);

router.patch('/:id/restore', userController.restore);

router.delete('/:id', userController.destroy);

router.delete('/:id/force', userController.forceDestroy);

router.use('/:slug', userController.show);

module.exports = router;
