import { Model, DECIMAL, INTEGER } from 'sequelize';
import db from '.';

class Account extends Model {
  id!: number;
  balance!: number;
}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'accounts',
});

export default Account;
