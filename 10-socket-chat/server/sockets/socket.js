/*jshint esversion: 8 */

const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');

const usuarios = new Usuarios();

io.on('connection', (client) => {
    client.on('entrarChat', (usuario, callback) => {

        if (!usuario.nombre) {
            return callback({
                error: true,
                mensaje: 'El nombre es necesario'
            });
        }

        let personas = usuarios.agregarPersona(client.id, usuario.nombre);

        // client.broadcast.emit('crearMensaje', { usuario: 'sistema', mensaje: `${usuario.nombre} se unió el chat` });
        client.broadcast.emit('listaPersona', usuarios.getPersonas());

        callback(personas);
    });

    client.on('disconnect', () => {
        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.emit('crearMensaje', { usuario: 'sistema', mensaje: `${personaBorrada.nombre} abandonó el chat` });
        client.broadcast.emit('listaPersona', usuarios.getPersonas());
    });
});