import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createLoginSchema, loginSchema } from '../schemas/loginSchema';
import ILoginService from '../interfaces/ILoginService';
import User from '../database/models/users';

export default class Validation {
  constructor(private LoginService: ILoginService) { }

  public createValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const { error } = createLoginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const user = await User.findOne({
      where: { username },
    });
    if (user) return res.status(401).json({ message: 'Username already in use' });
    const re = /[A-Z].*\d|\d.*[A-Z]/;
    const passwordFormat = re.test(password);
    if (!passwordFormat) return res.status(401).json({ message: 'Wrong password format' });
    next();
  };

  public loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const user = await User.findOne({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: 'Unregistered user' });
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) return res.status(401).json({ message: 'Incorrect username or password' });

    next();
  };
}
