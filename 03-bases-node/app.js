/*jshint esversion: 6 */

const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).help().argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

// let parametro = argv[2];
// Se le pasa el parámetro como --base=
// let base = parametro.split("=")[1];

console.log(argv.limite);

// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));