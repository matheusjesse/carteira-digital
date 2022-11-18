import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';
import Validation from '../middlewares/validation';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const validation = new Validation(loginService);

const router = Router();

router.post('/', validation.loginValidation, (req, res) => loginController.login(req, res));
router.put('/', validation.createValidation, (req, res) => loginController.create(req, res));

export default router;
