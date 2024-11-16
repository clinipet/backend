const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.get('/upcoming', appointmentController.getUpcoming);
router.get('/count', appointmentController.countTotal);
router.get('/home/:id', appointmentController.getByIdHome);


module.exports = router;