const Veterinarian = require('../models/veterinarian.model');

exports.obterTodosVeterinarios = async (req, res) => {
    try {
        const resultado = await Veterinarian.obterTodos();
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};

exports.obterVeterinarioPorId = async (req, res) => {
    try {
        const resultado = await Veterinarian.obterPorId(req.params.id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows[0]);
        } else {
            res.status(404).json({ mensagem: 'Veterinário não encontrado' });
        }
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};

exports.criarVeterinario = async (req, res) => {
    try {
        const resultado = await Veterinarian.criar(req.body);
        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};

exports.atualizarVeterinario = async (req, res) => {
    try {
        const resultado = await Veterinarian.atualizar(req.params.id, req.body);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows[0]);
        } else {
            res.status(404).json({ mensagem: 'Veterinário não encontrado' });
        }
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};

exports.excluirVeterinario = async (req, res) => {
    try {
        await Veterinarian.excluir(req.params.id);
        res.status(204).send();
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};

exports.contarVeterinarios = async (req, res) => {
    try {
        const resultado = await Veterinarian.contar();
        res.json({ total: parseInt(resultado.rows[0].count) });
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
};