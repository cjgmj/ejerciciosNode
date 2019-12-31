/*jshint esversion: 6 */

// requireds
const fs = require('fs');

// También se podria exportar poniendo module.exports.crearArchivo = ...
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        // Al usar Number si se le pasa un número como un string lo interpreta como number
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}`;

            if (i != 10) {
                data += '\n';
            }
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    // Es como poner crearArchivo: crearArchivo
    crearArchivo
};