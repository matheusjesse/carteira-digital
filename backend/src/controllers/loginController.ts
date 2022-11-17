import { Request, Response } from 'express';
import IUsersService from '../interfaces/ILoginService';

export default class UsersController {
  constructor(
    private UsersService: IUsersService,
  ) { }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.UsersService.login(email, password);
    res.status(200).json({ token });
  }
}
