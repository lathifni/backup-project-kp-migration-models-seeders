'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_belanjas', {
      rek_PSpBSb5: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'no action',
        references:{
          model: 'sub_belanjas',
          key: 'rek_PSpBSb5',
          as: 'id'
        }
      },
      rek_PSpBSbDb5: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      tahun: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      anggaran: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_belanjas');
  }
};