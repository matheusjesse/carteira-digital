import { Request, Response } from 'express';
import url from 'url';
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
    const requestUrl = req.url;
    const part = url.parse(requestUrl, true);
    const obj = {
      date: part.query.date === 'null' ? null : part.query.date,
      filter: part.query.filter === 'null' ? null : part.query.filter,
    };
    const { date, filter } = obj as {
      date: 'recent' | 'old' | null, filter: 'cashin' | 'cashout' | null
    };
    const token: string = req.headers.authorization as string;
    const author = JwtService.decodeToken(token) as { username: string, password: string };
    const transactionData = await
    this.TransactionService.transactionFilter(date, filter, author.username);
    res.status(200).json(transactionData);
  }
}
