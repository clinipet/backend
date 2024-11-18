const express = require('express');
const router = express.Router();
const veterinarianController = require('../controllers/veterinarian.controller');

router.get('/count', veterinarianController.totalVeterinarians);

module.exports = router;