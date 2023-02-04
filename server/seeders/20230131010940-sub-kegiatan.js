'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sub_kegiatans', [{
      rek_PK4: '4.01.01.1.01.',
      rek_PKSk4: '4.01.01.1.01.06.',
      tahun: 2022,
      nama: 'Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD '
    }, {
      rek_PK4: '4.01.01.1.02.',
      rek_PKSk4: '4.01.02.1.02.02.',
      tahun: 2022,
      nama: 'Penyediaan Administrasi Pelaksanaan Tugas ASN'
    }, {
      rek_PK4: '4.01.01.1.02.',
      rek_PKSk4: '4.01.02.1.02.04.',
      tahun: 2022,
      nama: 'Koordinasi dan Pelaksanaan Akuntansi SKPD'
    }, {
      rek_PK4: '4.01.01.1.07.',
      rek_PKSk4: '4.01.02.1.07.06.',
      tahun: 2022,
      nama: 'Pengadaan Peralatan dan Mesin Lainnya'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_kegiatans', null, {});
  }
};
