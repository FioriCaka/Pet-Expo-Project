import express from 'express';
import { signup , login, auth} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);
router.post('/auth', auth);


export default router;
