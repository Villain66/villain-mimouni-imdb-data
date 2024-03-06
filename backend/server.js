const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Middleware pour ne laisser passer que les utilisateurs connectés
app.use((req, res, next)=> {
    console.log('Requête reçue');
    next();
});
//Exemple de requête get
app.get('/', (req, res) => {
    res.send('hey');
});

app.use('/api/categories', require('./routes/api/category.route'));

app.listen(port, () => {
    console.log("app démarrée");
});