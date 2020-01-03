/*jshint esversion: 8 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hola mundo');

    let salida = {
        nombre: 'cjgmj',
        url: req.url
    };

    res.send(salida);
});

app.listen(3000, () => console.log('Escuchando el puerto 3000'));