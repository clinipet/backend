const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.get('/', petController.getAllPets);
router.get('/count', petController.totalPets);
router.get('/home', petController.getPetsHome);
router.get('/:id', petController.getPetById);
router.post('/', petController.createPet);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);
router.get('/client/:id', petController.findByClient);

module.exports = router;
