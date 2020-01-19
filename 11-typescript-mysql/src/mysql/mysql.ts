import mysql = require('mysql');

export default class MySQL {
    private static _instance: MySQL;

    con: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Clase inicializada');

        this.con = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          database : 'node_db'
        });

        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private conectarDB() {
        this.con.connect((err: mysql.MysqlError) => {
            if(err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}