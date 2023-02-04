'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sub_belanjas', [{
      rek_PSpB5: '5.1.02.01.',
      rek_PSpBSb5: '5.1.02.01.01.',
      tahun: 2022,
      nama: 'Belanja Barang Pakai Habis'
    }, {
      rek_PSpB5: '5.1.01.03.',
      rek_PSpBSb5: '5.1.01.03.07.',
      tahun: 2022,
      nama: 'Belanja Honorarium'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_belanjas', null, {});
  }
};
