import { NextFunction, Request, Response } from 'express';
import { transactionSchema } from '../schemas/transactionSchema';
import IAccountService from '../interfaces/IAccountService';
import JwtService from './JwtService';

export default class AccountValidate {
  constructor(private AccountService: IAccountService) { }

  public validate = async (req: Request, res: Response, next: NextFunction) => {
    const { favorecedor, beneficiado, value } = req.body;
    const message = 'Unauthorized transaction';
    const { error } = transactionSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const checkFavorecedor = await this.AccountService.findUser(favorecedor);
    if (!checkFavorecedor) return res.status(401).json({ message });
    const checkBeneficiado = await this.AccountService.findUser(beneficiado);
    if (!checkBeneficiado) return res.status(401).json({ message });
    const checkUsername = favorecedor === beneficiado;
    if (checkUsername) return res.status(401).json({ message });
    const { accountId } = await this.AccountService.findUser(favorecedor);
    const { balance } = await this.AccountService.findBalance(accountId);
    const checkBalance = value > balance;
    if (checkBalance) return res.status(401).json({ message: 'insufficient funds' });
    next();
  };

  public validateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const { favorecedor } = req.body;
    const token: string = req.headers.authorization as string;
    const author = JwtService.decodeToken(token) as { username: string, password: string };
    const checkAuthor = author.username !== favorecedor;
    if (checkAuthor) return res.status(401).json({ message: 'Unauthorized transaction' });
    next();
  };
}
