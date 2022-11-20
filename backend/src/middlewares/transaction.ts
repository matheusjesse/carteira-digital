import { NextFunction, Request, Response } from 'express';
import url from 'url';
import { transactionFilterSchema } from '../schemas/transactionSchema';
import JwtService from './JwtService';
import ITransactiontService from '../interfaces/ITransactionService';

export default class TransactionValidate {
  constructor(private Transaction: ITransactiontService) { }

  public validateBody = async (req: Request, res: Response, next: NextFunction) => {
    const requestUrl = req.url;
    const part = url.parse(requestUrl, true);
    const obj = {
      date: part.query.date === 'null' ? null : part.query.date,
      filter: part.query.filter === 'null' ? null : part.query.filter,
    };
    const { error } = transactionFilterSchema.validate(obj);
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
