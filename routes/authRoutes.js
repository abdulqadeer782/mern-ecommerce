const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js');
const requireAuth = require('../middlewares/authMiddleware.js');

const router = express.Router();

// register route
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/test', requireAuth, (req, res) => {
    res.send("protected route");
})

module.exports = router;
