const { Sequelize } = require('sequelize');
const MangaModel = require('./manga');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

const Manga = MangaModel(sequelize);

module.exports = { sequelize, Manga };
