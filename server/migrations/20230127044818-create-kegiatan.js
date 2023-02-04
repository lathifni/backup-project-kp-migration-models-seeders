'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kegiatans', {
      rek_P4: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'no action',
        references:{
          model: 'programs',
          key: 'rek_P4',
          as: 'id'
        }
      },
      rek_PK4: {
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
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('kegiatans');
  }
};