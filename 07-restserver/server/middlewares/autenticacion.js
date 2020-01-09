/*jshint esversion: 8 */

const jwt = require('jsonwebtoken');

// Verificar token
let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');

    if (token) {
        token = token.split('Bearer ')[1];
    }

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;

        // Si no se llama al next no continúa la ejecución
        next();
    });
};

// Verificar rol administrador
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;

    // Si no se llama al next no continúa la ejecución
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdminRole
};