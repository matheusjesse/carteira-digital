import { Model, STRING, INTEGER } from 'sequelize';
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
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

User.belongsTo(Account, { foreignKey: 'accountId', as: 'user' });

export default User;
