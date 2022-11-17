import User from '../database/models/users';

export default interface ILoginService {
  login(username: string, password: string): Promise<string>
  findUser(username: string): Promise<User>
}
