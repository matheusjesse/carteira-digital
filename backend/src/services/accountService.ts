import User from '../database/models/users';
import IAccountService from '../interfaces/IAccountService';
import Account from '../database/models/accounts';
import Transaction from '../database/models/transactions';

export default class AccountService implements IAccountService {
  balance = async (username: string): Promise<User> => {
    const data = await User.findOne({
      where: { username },
      attributes: { exclude: ['password', 'id', 'accountId'] },
      include: [{ model: Account, as: 'account', attributes: ['balance', 'id'] }],
    });
    return data as User;
  };

  cashOut = async (favorecedor: string, beneficiado: string, value: number): Promise<string> => {
    const cashOut = await this.findUser(favorecedor);
    const { accountId } = cashOut;
    const oldBalance = await this.findBalance(accountId);
    const { balance } = oldBalance;
    const newBalance = (balance - value);

    await Account.update({ balance: newBalance }, {
      where: { id: accountId },
    });
    const recived = await this.cashIn(beneficiado, value);

    await Transaction.create({ debitedAccountId: accountId, creditedAccountId: recived, value });

    return 'success';
  };

  cashIn = async (beneficiado: string, value: number): Promise<string> => {
    const cashIn = await this.findUser(beneficiado);
    const { accountId } = cashIn;
    const oldBalance = await this.findBalance(accountId);
    const { balance } = oldBalance;
    const newBalance = balance + value;
    await Account.update({ balance: newBalance }, {
      where: { id: accountId },
    });

    return accountId;
  };

  findUser = async (username: string): Promise<User> => {
    const user = await User.findOne({
      where: { username },
    });
    return user as User;
  };

  findBalance = async (accountId: string): Promise<Account> => {
    const accountBalance = await Account.findOne({
      where: { id: accountId },
    });
    return accountBalance as Account;
  };
}
