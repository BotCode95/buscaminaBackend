const cors = require('cors');
const express =require('express');
const {dbConnection} = require('../database/config');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.gamePath = '/api/game';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    
    async conectarDB() {
        await dbConnection();
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.gamePath, require('../routes/game'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server is running on port ${this.port}`);
        });
    }
}

module.exports = Server;