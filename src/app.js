import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
 
const app = express();
const mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI).then(() => {
    console.log('Conectado ao MongoDB com sucesso');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

app.use(express.json());
app.use(routes);
app.use(cors());

export { app };
