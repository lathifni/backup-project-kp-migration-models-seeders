'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pengeluarans', [{
      rek_P5: '5.1.',
      rek_PKSk4: '4.01.01.1.01.06.',
      tahun: 2022,
      nama: 'BELANJA OPERASI'
    }, {
      rek_P5: '5.2.',
      rek_PKSk4: '4.01.02.1.07.06.',
      tahun: 2022,
      nama: 'BELANJA MODAL'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pengeluarans', null, {});
  }
};
