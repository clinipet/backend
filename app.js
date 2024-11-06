const express = require('express');
const app = express();
const petRoutes = require('./src/routes/pet.routes');

app.use(express.json());

app.use('/api/pets', petRoutes);

module.exports = app;
