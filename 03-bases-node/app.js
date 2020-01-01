/*jshint esversion: 6 */

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
// Se le pasa el parámetro como --base=
let base = parametro.split("=")[1];

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));