"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const accounts_1 = __importDefault(require("./accounts"));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    debitedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    creditedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DECIMAL,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'transactions',
    underscored: true,
});
Transaction.belongsTo(accounts_1.default, { foreignKey: 'debitedAccountId', as: 'debitedAccount' });
Transaction.belongsTo(accounts_1.default, { foreignKey: 'creditedAccountId', as: 'creditedAccount' });
accounts_1.default.hasMany(Transaction, {
    foreignKey: 'debitedAccountId',
    sourceKey: 'id',
    as: 'debitedUser',
});
accounts_1.default.hasMany(Transaction, {
    foreignKey: 'creditedAccountId',
    sourceKey: 'id',
    as: 'creditedUser',
});
exports.default = Transaction;
