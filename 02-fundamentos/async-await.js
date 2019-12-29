/*jshint esversion: 8 */

// let getNombre = async() => {

//     throw new Error('No existe un numbre para ese usuario');

//     return 'cjgmj';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cjgmj');
        }, 3000);
    });
};

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
};

console.log(getNombre());
getNombre().then(nombre => console.log(nombre)).catch(err => console.log('Error de ASYNC', err));
saludo().then(mensaje => console.log(mensaje));