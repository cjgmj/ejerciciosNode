var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'cjgmj',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Se ejecuta el callback');
    console.log(resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});