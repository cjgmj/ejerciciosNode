// Usando ts se cambia la forma de importar, pudiendo usar las dos siguientes
// import express = require('express');
import express from 'express';

import todosRoutes from './routes/todos';

const app = express();

app.use(express.json());

app.use(todosRoutes);

app.listen(3000);
