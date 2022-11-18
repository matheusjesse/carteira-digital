import { Request, Response } from 'express';
import IAccountService from '../interfaces/IAccountService';
import JwtService from '../middlewares/JwtService';

export default class AccountController {
  constructor(
    private AccountService: IAccountService,
  ) { }

  async balance(req: Request, res: Response) {
    const token: string = req.headers.authorization as string;
    const { username } = JwtService.decodeToken(token) as { username: string, password: string };
    const user = await this.AccountService.balance(username);
    res.status(200).json(user);
  }

  async cashOut(req: Request, res: Response) {
    const { favorecedor, beneficiado, value } = req.body;
    const message = await this.AccountService.cashOut(favorecedor, beneficiado, value);
    res.status(201).json({ message });
  }
}
