/*jshint esversion: 6 */

// requireds
const fs = require('fs');

// También se podria exportar poniendo module.exports.crearArchivo = ...
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        // Al usar Number si se le pasa un número como un string lo interpreta como number
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}`;

            if (i != limite) {
                data += '\n';
            }
        }

        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor introducido ${base} no es un número`);
        return;
    }

    if (!Number(limite)) {
        console.log(`El valor introducido ${limite} no es un número`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    // Es como poner crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
};