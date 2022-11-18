import User from '../database/models/users';
import Account from '../database/models/accounts';

export default interface IAccountService {
  balance(username: string): Promise<User>
  cashOut(favorecedor: string, beneficiado: string, value: number): Promise<string>
  findBalance(accountId: string): Promise<Account>
  findUser(username: string): Promise<User>
}

export interface IAccountBalance {
  username: string
  account: {
    balance: string,
  }
}
