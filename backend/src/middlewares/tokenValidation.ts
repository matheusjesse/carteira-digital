import { NextFunction, Request, Response } from 'express';
import JwtService from './JwtService';
import IAccountService from '../interfaces/IAccountService';

export default class TokenValidation {
  constructor(private AccountService: IAccountService) { }

  public validToken = async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization as string;
    try {
      JwtService.verify(token) as { username: string, password: string };
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next();
  };
}
