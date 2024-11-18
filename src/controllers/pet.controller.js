const Pet = require('../models/pet.model');

exports.getAllPets = async (req, res) => {
  try {
    const result = await Pet.getAll();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const result = await Pet.getById(req.params.id);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPet = async (req, res) => {
  try {
    const result = await Pet.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const result = await Pet.update(req.params.id, req.body);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.totalPets = async(req, res) => {
    try {
        const result = await Pet.count();
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findByClient = async (req, res) => {
  try {
    const result = await Pet.findByClient(req.params.id);
    res.status(200).send(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPetsHome = async(req, res) => {
    try {
        const result = await Pet.getAllDetailed();
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};