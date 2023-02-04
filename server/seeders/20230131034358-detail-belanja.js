'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('detail_belanjas', [{
      rek_PSpBSb5: '5.1.02.01.01.',
      rek_PSpBSbDb5: '5.1.02.01.01.0025',
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Kertas dan Cover',
      anggaran: 1194600
    }, {
      rek_PSpBSb5: '5.1.02.01.01.',
      rek_PSpBSbDb5: '5.1.02.01.01.0026',
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Cetak',
      anggaran: 715000
    }, {
      rek_PSpBSb5: '5.1.02.01.01.',
      rek_PSpBSbDb5: '5.1.02.01.01.0029',
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer',
      anggaran: 917000
    }, {
      rek_PSpBSb5: '5.1.02.01.01.',
      rek_PSpBSbDb5: '5.1.02.01.01.0052',
      tahun: 2022,
      nama: 'Belanja Makanan dan Minuman Rapat',
      anggaran: 9150000
    }]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('detail_belanjas', null, {});
  }
};
