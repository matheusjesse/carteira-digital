'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts', 
    [
      { id: 1, balance: 100.00},
      { id: 2, balance: 100.00},
      { id: 3, balance: 100.00},
      { id: 4, balance: 100.00},
      { id: 5, balance: 100.00},
      { id: 6, balance: 100.00},
      { id: 7, balance: 100.00},
      { id: 8, balance: 100.00},
      { id: 9, balance: 100.00},
      { id: 10, balance: 100.00},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
