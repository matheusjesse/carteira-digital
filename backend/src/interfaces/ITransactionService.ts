import Transaction from '../database/models/transactions';

export default interface ITransactiontService {
  transaction(username: string): Promise<Transaction[]>
  transactionFilter(
    date: 'recent' | 'old' | null,
    filter: 'cashout' | 'cashin' | null, username: string): Promise<Transaction[]>
}

export interface IFilterResult {
  balance: number,
  id: number,
  debitedUser:Transaction[]
  creditedUser: Transaction[]
}
