const express = require('express');
const app = express();
const petRoutes = require('./src/routes/pet.routes');
const authRoutes = require('./src/routes/auth.routes');
const { verifyToken } = require('./src/middleware/auth.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas públicas
app.use('/api/auth', authRoutes);

//rotas privadas
app.use('/api/pets', verifyToken, petRoutes);

module.exports = app;
