import { NextFunction, Request, Response } from 'express';
import { transactionFilterSchema } from '../schemas/transactionSchema';
import JwtService from './JwtService';
import ITransactiontService from '../interfaces/ITransactionService';

export default class TransactionValidate {
  constructor(private Transaction: ITransactiontService) { }

  public validateBody = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = transactionFilterSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    next();
  };

  public tokenValidate = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization as string;
    try {
      JwtService.verify(token) as { username: string, password: string };
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next();
  };
}
