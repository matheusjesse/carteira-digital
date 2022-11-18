import { Model, DataTypes } from 'sequelize';
import db from '.';

class Account extends Model {
  id!: number;
  balance!: number;
}

Account.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
    get() {
      return parseFloat(this.getDataValue('balance')) || null;
    },
  },
}, {
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

export default Account;
