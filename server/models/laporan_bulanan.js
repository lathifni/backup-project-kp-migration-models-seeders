'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laporan_bulanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      laporan_bulanan.belongsTo(models.detail_belanja, {
        foreignKey: 'rek_PSpBSbDb5'
      }),
      laporan_bulanan.hasMany(models.kwitansi, {
        foreignKey: 'id'
      })
    }
  }
  laporan_bulanan.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bulan: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tahun: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    anggaran: DataTypes.INTEGER,
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
    modelName: 'laporan_bulanan',
  });
  return laporan_bulanan;
};