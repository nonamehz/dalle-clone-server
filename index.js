import * as dotenv from 'dotenv';
import { Server } from './src/models/index.js';

dotenv.config();

const server = new Server();
server.listen();