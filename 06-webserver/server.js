/*jshint esversion: 8 */

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'cjgmj'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => console.log('Escuchando el puerto 3000'));