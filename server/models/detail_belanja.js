'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_belanja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_belanja.belongsTo(models.sub_belanja, {
        foreignKey: 'rek_PSpBSb5'
      }),
      detail_belanja.hasMany(models.laporan_bulanan, {
        foreignKey: 'rek_PSpBSbDb5'
      })
    }
  }
  detail_belanja.init({
    rek_PSpBSbDb5: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    tahun: DataTypes.INTEGER,
    nama: DataTypes.STRING,
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
    modelName: 'detail_belanja',
  });
  return detail_belanja;
};