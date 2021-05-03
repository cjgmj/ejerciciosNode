// Al añadirse que es de tipo 'module' se tienen hacer todas las importaciones como esta
import express from 'express';

// Es necesario poner la extensión para archivos del proyecto
// Importación con 'default'
// import resHandler from './response-handler.js';

import { resHandler } from './response-handler.js';

const app = express();

app.get('/', resHandler);

app.listen(3000);
