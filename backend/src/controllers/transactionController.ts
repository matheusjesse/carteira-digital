import { Request, Response } from 'express';
import ITransactiontService from '../interfaces/ITransactionService';
import JwtService from '../middlewares/JwtService';

export default class TransactionController {
  constructor(
    private TransactionService: ITransactiontService,
  ) { }

  async transaction(req: Request, res: Response) {
    const token: string = req.headers.authorization as string;
    const author = JwtService.decodeToken(token) as { username: string, password: string };
    const transactionData = await this.TransactionService.transaction(author.username);
    res.status(200).json(transactionData);
  }

  async transactionFilter(req: Request, res: Response) {
    const { date, filter } = req.body;
    const token: string = req.headers.authorization as string;
    const author = JwtService.decodeToken(token) as { username: string, password: string };
    const transactionData = await
    this.TransactionService.transactionFilter(date, filter, author.username);
    res.status(200).json(transactionData);
  }
}
