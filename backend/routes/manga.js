const express = require('express');
const router = express.Router();
const { Manga } = require('../models');

// GET all manga
router.get('/', async (req, res) => {
  try {
    const all = await Manga.findAll();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch manga' });
  }
});

// POST new manga
router.post('/', async (req, res) => {
  try {
    const manga = await Manga.create(req.body);
    res.status(201).json(manga);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create manga' });
  }
});

// DELETE manga
router.delete('/:id', async (req, res) => {
  try {
    await Manga.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete manga' });
  }
});

module.exports = router;
