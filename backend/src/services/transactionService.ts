import { Op } from 'sequelize';
import User from '../database/models/users';
import ITransactiontService, { IFilterResult } from '../interfaces/ITransactionService';
import Transaction from '../database/models/transactions';
import Account from '../database/models/accounts';

export default class TransactionService implements ITransactiontService {
  transaction = async (username: string): Promise<Transaction[]> => {
    const user = await User.findOne({ where: { username } });
    const data = await Transaction.findAll({
      where: {
        [Op.or]: [
          { debitedAccountId: user?.accountId },
          { creditedAccountId: user?.accountId },
        ],
      },
      order: [['createdAt', 'DESC']],
    });
    return data;
  };

  transactionFilter =
  // eslint-disable-next-line max-lines-per-function
  async (
    date: 'recent' | 'old' | null,
    filter: 'cashout' | 'cashin' | null,
    username: string,
  ): Promise<Transaction[]> => {
    let accountData: Transaction[] = [];
    if (!filter && date) {
      const filterData = await this.transactionByDate(date, username);
      accountData = [...filterData];
      return accountData;
    }
    const filterData = await this.transactionByDateAndFilter(date, username);
    const { debitedUser, creditedUser } = filterData;
    const filterCheck = filter === 'cashout';
    if (filterCheck) {
      accountData = [...debitedUser, ...creditedUser];
    } else {
      accountData = [...creditedUser, ...debitedUser];
    }
    return accountData;
  };
  // filtra só por data

  transactionByDate = async (date: 'recent' | 'old', username: string): Promise<Transaction[]> => {
    const user = await User.findOne({ where: { username } });
    const checkOrder = date === 'recent';
    const orderFilter = checkOrder ? 'DESC' : 'ASC';
    const data = await Transaction.findAll({
      where: {
        [Op.or]: [
          { debitedAccountId: user?.accountId },
          { creditedAccountId: user?.accountId },
        ],
      },
      order: [['createdAt', orderFilter]],
    });
    return data;
  };

  // eslint-disable-next-line max-lines-per-function
  transactionByDateAndFilter = async (
    date: 'recent' | 'old' | null,
    username: string,
  ): Promise<IFilterResult> => {
    const user = await User.findOne({ where: { username } });
    let newDate = date;
    if (!date) newDate = 'recent';
    const checkOrder = newDate === 'recent';
    const orderFilter = checkOrder ? 'DESC' : 'ASC';
    const data = await Account.findOne({
      where: { id: user?.accountId },
      include: [
        { model: Transaction, as: 'debitedUser' },
        { model: Transaction, as: 'creditedUser' },
      ],
      order: [
        [{ model: Transaction, as: 'debitedUser' }, 'createdAt', orderFilter],
        [{ model: Transaction, as: 'creditedUser' }, 'createdAt', orderFilter],
      ],
    });
    return data as unknown as IFilterResult;
  };
}
