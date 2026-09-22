const dotenv    =   require('dotenv').config();
const mongoose  =   require('mongoose');
const express   =   require('express');
const app       =   express();

const mongooseURI   =   'mongodb://localhost:27017/shop';
const devices       =   require('./routes/devices');

const PORT      =   process.env.DB_PORT;

app.use(express.json());

mongoose.connect(mongooseURI)
    .then(() => console.log('Conectado a BBDD'))
    .catch((err) => console.log(`Error BBDD disconected ${err}`));

app.use('/devices',devices);   

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// Ejercicio de GitHub Desktop realizado por Ana
