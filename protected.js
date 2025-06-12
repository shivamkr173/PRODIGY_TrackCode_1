const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/user', isAuthenticated, (req, res) => {
  res.json({ message: 'Welcome, authenticated user!' });
});

router.get('/admin', isAuthenticated, isAdmin, (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

module.exports = router;
