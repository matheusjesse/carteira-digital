import { Router } from 'express';
import TransactionController from '../controllers/transactionController';
import TransactionService from '../services/transactionService';
import TransactionValidate from '../middlewares/transaction';

const transactionService = new TransactionService();
const transactionController = new TransactionController(transactionService);
const transactionValidate = new TransactionValidate(transactionService);
const router = Router();

router.get(
  '/',
  transactionValidate.tokenValidate,
  (req, res) => transactionController.transaction(req, res),
);
router.get(
  '/filter/:data',
  transactionValidate.tokenValidate,
  transactionValidate.validateBody,
  (req, res) => transactionController.transactionFilter(req, res),
);

export default router;
