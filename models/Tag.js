const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js.js');

class Tag extends Model {}

Tag.init(
  { id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncriment: true,
  },

  tag_name: {
    type: DataTypes.STRING,
  }

    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
