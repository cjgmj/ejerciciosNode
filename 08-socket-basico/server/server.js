/*jshint esversion: 8 */

const express = require('express');

const socketIO = require('socket.io');

const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO mantendrá una comunicación directa con el backend
let io = socketIO(server);

io.on('connection', (client) => {
    console.log('Usuario conectado');
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});