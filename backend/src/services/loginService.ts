import User from '../database/models/users';
import ILoginService from '../interfaces/ILoginService';
import JwtService from '../middlewares/JwtService';
import Account from '../database/models/accounts';

export default class LoginService implements ILoginService {
  login = async (username: string, password: string): Promise<string> => {
    await User.findOne({
      where: { username },
      attributes: { exclude: ['password'] },
    });
    const token = JwtService.sign({ username, password });
    return token;
  };

  create = async (username: string, password: string): Promise<User> => {
    const balance = 100;
    const account = await Account.create({ balance });
    const { id } = account;
    const user = await User.create({ username, password, accountId: id });
    return user;
  };
}
