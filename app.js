require('dotenv').config()
const localBuild = process.env.LOCAL_BUILD;
const express = require('express');
const cors = require('cors');
const app = express();
const petRoutes = require('./src/routes/pet.routes');
const authRoutes = require('./src/routes/auth.routes');
const { verifyToken } = require('./src/middleware/auth.middleware');

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

//Rotas públicas
app.use('/api/auth', authRoutes);
app.use('/api/auth/verify', verifyToken, (req, res) => {
    res.status(200).json({ message: 'OK' });
});

//rotas privadas
app.use('/api/pets', verifyToken, petRoutes);

//Frontend dev
if(localBuild === 'true') {
    app.use(express.static(__dirname + '/public'));
}

module.exports = app;
