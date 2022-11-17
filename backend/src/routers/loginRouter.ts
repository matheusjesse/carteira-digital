import { Router } from 'express';
import LoginController from '../controllers/loginController';
import UsersService from '../services/loginService';

const usersService = new UsersService();
const loginController = new LoginController(usersService);

const router = Router();

router.post('/', (req, res) => loginController.login(req, res));

export default router;
