import { Router } from 'express';
import { criarTrasnsactions } from './controllers/criarTrasnsactions.js';
import { listarTrasnsactions } from './controllers/listarTrasnsactions.js';
import { editTrasnsaction } from './controllers/editTrasnsactions.js';
import { deleteTrasnsaction } from './controllers/deleteTrasnsactions.js';

const routes = Router();

routes.post('/transactions', criarTrasnsactions);
routes.get('/transactions', listarTrasnsactions);
routes.put('/transactions/:id', editTrasnsaction);
routes.delete('/transactions/:id', deleteTrasnsaction);

export { routes };