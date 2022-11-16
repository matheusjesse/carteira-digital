'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
    [
      { username: 'joao', password: '1A236359', account_id: 10},
      { username: 'luca', password: '1B336359', account_id: 9},
      { username: 'enzo', password: '1C233559', account_id: 8},
      { username: 'maria', password: '1X235559', account_id: 7},
      { username: 'gabriel', password: '1F236559', account_id: 6},
      { username: 'bruno', password: '1Q246559', account_id: 5},
      { username: 'thales', password: '1Z433559', account_id: 4},
      { username: 'marcia', password: '1S434559', account_id: 3},
      { username: 'ana', password: '1H212559', account_id: 2},
      { username: 'bia', password: '1Y236459', account_id: 1},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
