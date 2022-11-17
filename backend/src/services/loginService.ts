import User from '../database/models/users';
import ILoginService from '../interfaces/ILoginService';
import JwtService from '../middlewares/JwtService';

export default class LoginService implements ILoginService {
  login = async (username: string, password: string): Promise<string> => {
    await User.findOne({
      where: { username },
      attributes: { exclude: ['password'] },
    });
    const token = JwtService.sign({ username, password });
    return token;
  };

  findUser = async (username: string): Promise<User> => {
    const user = await User.findOne({
      where: { username },
    });
    return user as User;
  };
}
