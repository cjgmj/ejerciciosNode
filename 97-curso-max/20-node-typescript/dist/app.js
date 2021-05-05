"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Usando ts se cambia la forma de importar, pudiendo usar las dos siguientes
// import express = require('express');
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(todos_1.default);
app.listen(3000);
