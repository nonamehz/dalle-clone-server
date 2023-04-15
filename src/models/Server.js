import express from 'express';
import cors from 'cors';
import { dalleRoutes, postRoutes } from '../routes/index.js';
import { dbConnection } from '../database/conection.js';


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            post: '/api/v1/posts',
            dalle: '/api/v1/dalle',
        };
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json({ limit: '50mb' }));
    }

    routes() {
        this.app.use(this.path.post, postRoutes);
        this.app.use(this.path.dalle, dalleRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port, ${this.port}`);
        });
    }

}


export default Server;