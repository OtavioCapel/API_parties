import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './users/routes';

class App {
    public express: express.Application;
    
    constructor() { 
        this.express = express();
        this.middlewares();
        this.databaseConnection();
        this.routes();
    }

    private middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private databaseConnection() {
        mongoose.connect('mongodb://localhost:27017/rolezinho');
    }

    private routes() {
        this.express.use(routes)
    }

}

export default new App().express;


