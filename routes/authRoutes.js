import express from 'express'
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// register route
router.get('/register', registerUser);

export default router;
