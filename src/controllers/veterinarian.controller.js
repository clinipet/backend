const Veterinarian = require('../models/veterinarian.model');

exports.getAllVeterinarians = async (req, res) => {
  try {
    const result = await Veterinarian.getAll();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getVeterinarianById = async (req, res) => {
  try {
    const result = await Veterinarian.getById(req.params.id);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Veterinário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createVeterinarian = async (req, res) => {
  try {
    const result = await Veterinarian.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateVeterinarian = async (req, res) => {
  try {
    const result = await Veterinarian.update(req.params.id, req.body);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Veterinário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteVeterinarian = async (req, res) => {
  try {
    await Veterinarian.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStatistics = async (req, res) => {
  try {
    const [totalVets, consultationsToday, averageRating] = await Promise.all([
      Veterinarian.count(),
      Veterinarian.getConsultationsToday(),
      Veterinarian.getAverageRating()
    ]);

    res.json({
      totalVeterinarians: totalVets.rows[0].count,
      consultationsToday: consultationsToday.rows[0].count,
      averageRating: parseFloat(averageRating.rows[0].avg).toFixed(1)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};