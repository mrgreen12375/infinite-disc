// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Albums extends Model {}

// set up fields and rules for Album model
Albums.init(
  {
    // define columns**
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [10],
        isNumeric: true,
      },
    },
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'genre',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'albums',
  },
);

module.exports = Albums;
