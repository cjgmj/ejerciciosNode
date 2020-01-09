/*jshint esversion: 8 */

const jwt = require('jsonwebtoken');

// Verificar token
let verificaToken = (req, res, next) => {
    let token = req.get('Authorization').split('Bearer ')[1];

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

module.exports = {
    verificaToken
};