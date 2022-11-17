import User from '../database/models/users';

export default interface IUsersService {
  login(email: string, password: string): Promise<string>
  findUser(email: string): Promise<User>
}
