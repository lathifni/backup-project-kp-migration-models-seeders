'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_kegiatan.belongsTo(models.kegiatan, {
        foreignKey: 'rek_PK4'
      }),
      sub_kegiatan.hasMany(models.pengeluaran, {
        foreignKey: 'rek_PKSk4'
      })
    }
  }
  sub_kegiatan.init({
    rek_PKSk4: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    nama: DataTypes.STRING,
    NIP: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    sequelize,
    modelName: 'sub_kegiatan',
  });
  return sub_kegiatan;
};