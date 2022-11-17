import User from '../database/models/users';
import IUsersService from '../interfaces/ILoginService';
import JwtService from '../middlewares/JwtService';

export default class UsersService implements IUsersService {
  login = async (email: string, password: string): Promise<string> => {
    await User.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
    const token = JwtService.sign({ email, password });
    return token;
  };

  findUser = async (email: string): Promise<User> => {
    const user = await User.findOne({
      where: { email },
    });
    return user as User;
  };
}
