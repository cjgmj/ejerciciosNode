/*jshint esversion: 6 */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// Se crean las tres variables usando la desestructuración

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);