import { Model, DataTypes } from 'sequelize';
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
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  creditedAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
    get() {
      return parseFloat(this.getDataValue('value')) || null;
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize: db,
  modelName: 'transactions',
  underscored: true,
  timestamps: false,
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
