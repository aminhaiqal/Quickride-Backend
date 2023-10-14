const express = require('express');
const router = express.Router();
const { signupController } = require('../controllers/authController');
const { checkUserRole } = require('../middleware/authMiddleware');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', signupController);

router.get('/admin-dashboard', checkUserRole('admin'), (req, res) => {
  res.render('admin-dashboard');
});

router.get('/editor-dashboard', checkUserRole('editor'), (req, res) => {
  res.render('editor-dashboard');
});

module.exports = router;
