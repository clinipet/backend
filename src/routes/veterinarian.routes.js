const express = require('express');
const router = express.Router();
const veterinarianController = require('../controllers/veterinarian.controller');

router.get('/', veterinarianController.getAllVeterinarians);
router.get('/statistics', veterinarianController.getStatistics);
router.get('/:id', veterinarianController.getVeterinarianById);
router.post('/', veterinarianController.createVeterinarian);
router.put('/:id', veterinarianController.updateVeterinarian);
router.delete('/:id', veterinarianController.deleteVeterinarian);

module.exports = router;