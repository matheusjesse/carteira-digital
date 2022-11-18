import { Router } from 'express';
import AccountController from '../controllers/accountController';
import AccountService from '../services/accountService';
import TokenValidation from '../middlewares/tokenValidation';
import AccountValidate from '../middlewares/account';

const accountService = new AccountService();
const accountController = new AccountController(accountService);
const tokenValidation = new TokenValidation(accountService);
const accountValidate = new AccountValidate(accountService);
const router = Router();

router.get('/', tokenValidation.validToken, (req, res) => accountController.balance(req, res));
router.patch(
  '/cashout',
  tokenValidation.validToken,
  accountValidate.validate,
  accountValidate.validateAuthor,
  (req, res) => accountController.cashOut(req, res),
);
export default router;
