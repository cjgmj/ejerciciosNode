/*jshint esversion: 8 */

const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'sistema',
        mensaje: ' Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIÓ BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIÓ MAL'
            });
        }

    });
});