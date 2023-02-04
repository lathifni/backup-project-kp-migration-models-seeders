'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sub_belanjas', {
      rek_PSpB5: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'no action',
        references:{
          model: 'belanjas',
          key: 'rek_PSpB5',
          as: 'id'
        }
      },
      rek_PSpBSb5: {
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
    await queryInterface.dropTable('sub_belanjas');
  }
};