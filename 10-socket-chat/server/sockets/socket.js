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

        callback(personas);
    });
});