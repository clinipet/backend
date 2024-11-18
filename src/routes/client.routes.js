const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');

router.get('/count', clientController.totalClients);
router.get('/home', clientController.getClientsHome);

module.exports = router;