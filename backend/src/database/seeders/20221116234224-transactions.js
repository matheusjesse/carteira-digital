'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions', 
    [
      { 
        debited_account_id: 1,
        credited_account_id: 2,
        value: 14.44,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        debited_account_id: 3,
        credited_account_id: 4,
        value: 11.24,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        debited_account_id: 4,
        credited_account_id: 2,
        value: 2.14,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        debited_account_id: 3,
        credited_account_id: 1,
        value: 4.44,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        debited_account_id: 6,
        credited_account_id: 2,
        value: 24.33,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        debited_account_id: 4,
        credited_account_id: 1,
        value: 111.22,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};
