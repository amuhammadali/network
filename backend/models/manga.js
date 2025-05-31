const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Manga', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
