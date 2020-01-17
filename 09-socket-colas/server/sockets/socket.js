/*jshint esversion: 8 */

const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const tickerControl = new TicketControl();

io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = tickerControl.siguiente();
        callback(siguiente);
    });

    client.emit('estadoActual', {
        actual: tickerControl.getUltimo(),
        ultimos4: tickerControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = tickerControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        client.broadcast.emit('ultimos4', {
            ultimos4: tickerControl.getUltimos4()
        });
    });
});