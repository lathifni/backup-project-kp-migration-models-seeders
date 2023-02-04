'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sub_kegiatans', {
      rek_PK4: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'no action',
        references:{
          model: 'kegiatans',
          key: 'rek_PK4',
          as: 'id'
        }
      },
      rek_PKSk4: {
        primaryKey: true,
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
      NIP: {
        type: Sequelize.STRING,
        onDelete: 'no action',
        references:{
          model: 'staffs',
          key: 'NIP',
          as: 'id'
        }
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
    await queryInterface.dropTable('sub_kegiatans');
  }
};