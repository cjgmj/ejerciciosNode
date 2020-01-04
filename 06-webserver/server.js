/*jshint esversion: 8 */

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'cjgmj',
        year: new Date().getFullYear()
    });
});

app.listen(3000, () => console.log('Escuchando el puerto 3000'));