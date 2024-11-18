const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.get('/upcoming', appointmentController.getUpcoming);
router.get('/count', appointmentController.countTotal);
router.get('/count/weekly', appointmentController.countWeek);
router.get('/home/:id', appointmentController.getByIdHome);
router.get('/home', appointmentController.getAppointmentsHome);
router.patch('/:id', appointmentController.cancelAppointment);
router.put("/:id", appointmentController.updateAppointment);


module.exports = router;