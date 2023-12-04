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

// Add routes for new pages
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'path/to/your/views' });
});

router.get('/products', (req, res) => {
  res.sendFile('products.html', { root: 'path/to/your/views' });
});

router.get('/logout', (req, res) => {
  res.sendFile('logout.html', { root: 'path/to/your/views' });
});

module.exports = router;
