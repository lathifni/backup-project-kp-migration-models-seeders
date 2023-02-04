'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_pengeluaran.belongsTo(models.pengeluaran)
      models.pengeluaran.hasMany(sub_pengeluaran)
    }
  }
  sub_pengeluaran.init({
    rek_PSp5: {
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
    modelName: 'sub_pengeluaran',
  });
  return sub_pengeluaran;
};