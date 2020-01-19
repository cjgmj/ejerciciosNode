"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(port) {
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;
