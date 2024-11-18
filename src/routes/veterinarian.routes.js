const express = require('express');
const router = express.Router();
const veterinarianController = require('../controllers/veterinarian.controller');

router.get('/', veterinarianController.obterTodosVeterinarios);
router.get('/count', veterinarianController.contarVeterinarios);
router.get('/:id', veterinarianController.obterVeterinarioPorId);
router.post('/', veterinarianController.criarVeterinario);
router.put('/:id', veterinarianController.atualizarVeterinario);
router.delete('/:id', veterinarianController.excluirVeterinario);

module.exports = router;