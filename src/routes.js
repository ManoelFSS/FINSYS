import { Router } from "express";
import  { criarTrasnsactions } from "./controllers/criarTrasnsactions.js";
import {listarTrasnsactions} from "./controllers/listarTrasnsactions.js"

const routes = Router();

routes.post('/trasnsactions', criarTrasnsactions );
routes.get('/trasnsactions', listarTrasnsactions);

// routes.put('/trasnsactions/:id', (req, res) => {
//     const { id } = req.params
//     res.send(`atualizar a transação ${id}`)
// })

// routes.delete('/trasnsactions/:id', (req, res) => {
//     const { id } = req.params
//     res.send(`remover a transação ${id}`)
// })

export { routes }