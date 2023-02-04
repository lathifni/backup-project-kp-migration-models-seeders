'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sub_pengeluarans', [{
      rek_P5: '5.1.',
      rek_PSp5: '5.1.01.',
      tahun: 2022,
      nama: 'BELANJA PEGAWAI'
    }, {
      rek_P5: '5.2.',
      rek_PSp5: '5.1.02.',
      tahun: 2022,
      nama: 'BELANJA BARANG DAN JASA'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_pengeluarans', null, {});
  }
};
