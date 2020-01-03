/*jshint esversion: 8 */

const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'cjgmj',
            url: req.url
        };

        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');

        // Es importante acabar la respuesta
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');