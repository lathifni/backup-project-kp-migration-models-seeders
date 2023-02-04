'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('belanjas', [{
      rek_PSp5: '5.1.02.',
      rek_PSpB5: '5.1.02.01.',
      tahun: 2022,
      nama: 'Belanja Barang'
    }, {
      rek_PSp5: '5.1.01.',
      rek_PSpB5: '5.1.01.03.',
      tahun: 2022,
      nama: 'Tambahan Penghasilan berdasarkan Pertimbangan Objektif Lainnya ASN'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('belanjas', null, {});
  }
};
