/*jshint esversion: 6 */

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '5';

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));