/*jshint esversion: 6 */

function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));

// Función de flecha
let sumarFlecha = (a, b) => {
    return a + b;
};

console.log(sumarFlecha(10, 20));

// Función de flecha con una sola línea
let sumarFlechaLinea = (a, b) => a + b;

console.log(sumarFlechaLinea(10, 20));


function saludar() {
    return 'Hola mundo';
}

console.log(saludar());

// Función flecha sin argumentos
let saludarFlecha = () => 'Hola mundo';

console.log(saludarFlecha());

// Función flecha con un argumento
let saludarNombre = nombre => `Hola ${nombre}`;

console.log(saludarNombre('cjgmj'));

// Dentro de la función de flecha no se puede usar this para referenciar el objeto fuera de la función de flecha
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());