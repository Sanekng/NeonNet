import express from 'express';
import { signup, login } from '../controllers/auth.controller';
import { protect, authorize } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get('/admin', protect, authorize("admin"), (req, res)=>{
    return res.status(200).json({message: 'Welcome Sanekng!'});
} )

router.post('/signup', signup);
router.post('/login', login);

export default router;