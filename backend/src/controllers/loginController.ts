import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import ILoginService from '../interfaces/ILoginService';

export default class LoginController {
  constructor(
    private LoginService: ILoginService,
  ) { }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const token = await this.LoginService.login(username, password);
    res.status(200).json({ token });
  }

  async create(req: Request, res: Response) {
    const { username, password } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    await this.LoginService.create(username, hash);
    res.status(201).json({ message: 'success' });
  }
}
