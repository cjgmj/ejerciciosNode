/*jshint esversion: 6 */

// requireds
const fs = require('fs');

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}`;

    if (i != 10) {
        data += '\n';
    }
}

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});