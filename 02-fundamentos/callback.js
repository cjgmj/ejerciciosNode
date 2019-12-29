/*jshint esversion: 6 */

// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'cjgmj',
        // Es lo mismo que poner id: id
        id
    };

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

};

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});