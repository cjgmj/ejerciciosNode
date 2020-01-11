/*jshint esversion: 8 */

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({ useTempFiles: true }));

app.put('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningún archivo'
            }
        });
    }

    let archivo = req.files.archivo;
    let nombreSplit = archivo.name.split('.');
    let extension = nombreSplit[nombreSplit.length - 1];

    // Extensiones permitidas
    let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Las extensiones permitidas son ' + extensionesValidas.join(', '),
                ext: extension
            }
        });
    }

    archivo.mv(`uploads/${archivo.name}`, (err) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err
            });

        res.json({
            ok: true,
            message: 'Imagen subida correctamente'
        });
    });
});

module.exports = app;