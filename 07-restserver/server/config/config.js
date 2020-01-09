/*jshint esversion: 8 */

// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Conexión base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb+srv://<user>:<password>@cluster0-a2uzr.mongodb.net/test';
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// Fecha expiración token
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed de autenticación
process.env.SEED = process.env.SEED | 'este-es-el-seed-desarrollo';