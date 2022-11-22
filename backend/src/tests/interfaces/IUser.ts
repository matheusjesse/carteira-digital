export interface IUser {
  id: number,
  username: string,
  password?: string,
  accountId?: 1
}

export interface IUserBalance {
  username: string,
  account: {
    balance: number,
    id: number
  }
}