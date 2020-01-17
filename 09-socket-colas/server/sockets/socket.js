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
        actual: tickerControl.getUltimo()
    });
});