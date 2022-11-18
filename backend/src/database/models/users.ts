import { Model, DataTypes } from 'sequelize';
import db from '.';
import Account from './accounts';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

User.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

export default User;
