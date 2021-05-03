// Importación con la otra síntaxis
// const fs = require('fs').promises;

import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Se puede exportar directamente en la declaración añadiendo 'export' al principio
export const resHandler = (req, res, next) => {
  // Con el tipo a módulo no existen las variables globales
  // por lo que no podemos usar __dirname
  // res.sendFile(path.join(__dirname, 'my-page.html'));

  fs.readFile('my-page.html', 'utf8')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
};

// Para exportar varias cosas se hace sin el 'default'
// Default solo se añade cuando se exporta una única cosa
// export default resHandler;
