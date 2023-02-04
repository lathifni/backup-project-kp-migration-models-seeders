'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class belanja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      belanja.belongsTo(models.sub_pengeluaran, {
        foreignKey: 'rek_PSp5'
      }),
      belanja.hasMany(models.sub_belanja, {
        foreignKey: 'rek_PSpB5'
      })
    }
  }
  belanja.init({
    rek_PSpB5: {
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
    modelName: 'belanja',
  });
  return belanja;
};