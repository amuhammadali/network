require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');
const mangaRoutes = require('./routes/manga');

app.use(cors());
app.use(express.json());

app.use('/api/manga', mangaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync(); // optional: { force: true }
    console.log('Server started on port', PORT);
  } catch (err) {
    console.error('Failed to connect DB:', err);
  }
});
