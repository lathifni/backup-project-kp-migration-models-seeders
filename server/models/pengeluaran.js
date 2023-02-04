'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengeluaran.belongsTo(models.sub_kegiatan, {
        foreignKey: 'rek_PKSk4'
      }),
      pengeluaran.hasMany(models.belanja, {
        foreignKey: 'rek_P5'
      })
    }
  }
  pengeluaran.init({
    rek_P5: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    tahun: DataTypes.INTEGER,
    nama: DataTypes.STRING,
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
    modelName: 'pengeluaran',
  });
  return pengeluaran;
};