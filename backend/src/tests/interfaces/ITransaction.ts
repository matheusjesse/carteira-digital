
export interface ITransaction {
  value: number,
  id: number,
  debitedAccountId: number,
  creditedAccountId: number,
  createdAt: string
}