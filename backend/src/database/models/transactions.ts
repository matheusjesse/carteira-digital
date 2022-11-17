import { Model, DATE, DECIMAL, INTEGER } from 'sequelize';
import db from '.';
import Account from './accounts';

class Transaction extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: string;
}

Transaction.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'transactions',
  underscored: true,
});

Transaction.belongsTo(Account, { foreignKey: 'debitedAccountId', as: 'debitedAccount' });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId', as: 'creditedAccount' });

Account.hasMany(Transaction, {
  foreignKey: 'debitedAccountId',
  sourceKey: 'id',
  as: 'debitedUser',
});
Account.hasMany(Transaction, {
  foreignKey: 'creditedAccountId',
  sourceKey: 'id',
  as: 'creditedUser',
});

export default Transaction;
