'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_belanja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_belanja.belongsTo(models.belanja, {
        foreignKey: 'rek_PSpB5'
      }),
      sub_belanja.hasMany(models.detail_belanja, {
        foreignKey: 'rek_PSpBSb5'
      }),
      sub_belanja.belongsTo(models.staff, {
        foreignKey: 'NIP'
      })
    }
  }
  sub_belanja.init({
    rek_PSpBSb5: {
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
    modelName: 'sub_belanja',
  });
  return sub_belanja;
};