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
}
