var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre')) {
    window.location = 'index.html';
    throw new Error('El nombre es necesario');
}

var usuario = {
    nombre: params.get('nombre')
};

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados', resp);
    });
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'cjgmj',
//     mensaje: 'Hola mundo'
// }, function(resp) {
//     console.log('Se ejecuta el callback');
//     console.log(resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log(mensaje);
});

socket.on('listaPersona', function(personas) {
    console.log(personas);
});

// Mensaje privados
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado:', mensaje);
});