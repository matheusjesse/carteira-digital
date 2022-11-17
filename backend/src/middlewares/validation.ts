import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/loginSchema';
import ILoginService from '../interfaces/ILoginService';

export default class Validation {
  constructor(private LoginService: ILoginService) { }

  public createValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const user = await this.LoginService.findUser(username);
    if (user) return res.status(401).json({ message: 'Username already in use' });
    const re = /[A-Z].*\d|\d.*[A-Z]/;
    const passwordFormat = re.test(password);
    if (!passwordFormat) return res.status(401).json({ message: 'Wrong password format' });
    next();
  };
}
