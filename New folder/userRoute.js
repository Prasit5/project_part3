const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.use(userController.verifyToken);

router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);

module.exports = router;
