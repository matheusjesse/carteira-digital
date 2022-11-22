import { ITransaction } from '../interfaces/ITransaction'

export const transactionMock: ITransaction[] = [
  {
    "value": 13.56,
    "id": 4,
    "debitedAccountId": 2,
    "creditedAccountId": 1,
    "createdAt": "2022-11-22T19:52:58.965Z"
  },
  {
    "value": 13.56,
    "id": 3,
    "debitedAccountId": 2,
    "creditedAccountId": 1,
    "createdAt": "2022-11-22T19:52:57.915Z"
  },
  {
    "value": 13.56,
    "id": 2,
    "debitedAccountId": 2,
    "creditedAccountId": 1,
    "createdAt": "2022-11-22T19:52:56.887Z"
  },
  {
    "value": 12,
    "id": 1,
    "debitedAccountId": 2,
    "creditedAccountId": 1,
    "createdAt": "2022-11-22T17:15:13.506Z"
  }
]