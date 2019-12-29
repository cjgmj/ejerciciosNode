/*jshint esversion: 6 */

let empleados = [{
    id: 1,
    nombre: 'John'
}, {
    id: 2,
    nombre: 'Joe'
}, {
    id: 3,
    nombre: 'Jane'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
    }
};

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(`El salario de ${salario.nombre} es de ${salario.salario}€`);
        }
    });
});