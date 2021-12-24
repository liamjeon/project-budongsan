'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActureTrade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ActureTrade.init({
    dealAmount: DataTypes.STRING,
    dealYear: DataTypes.INTEGER,
    apartmentName: DataTypes.STRING,
    dealMonth: DataTypes.INTEGER,
    dealDay: DataTypes.INTEGER,
    area: DataTypes.FLOAT,
    floor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActureTrade',
  });
  return ActureTrade;
};