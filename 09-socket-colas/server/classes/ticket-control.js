/*jshint esversion: 8 */

const fs = require('fs');

class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        if (data.hoy === this.hoy) {
            // this.ultimo = data.ultimo;
            // this.hoy = data.hoy;
        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);

        console.log('Se ha inicializado el sistema');
    }
}

module.exports = {
    TicketControl
};