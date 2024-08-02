// import { criarTrasnsactionsUseCase } from '../usecases/criarTrasnsactionsUseCases.js';

// const criarTrasnsactions = async (req, res) => {
//     try {
//         const transaction = await criarTrasnsactionsUseCase.execute(req.body);
//         return res.status(201).json(transaction);
//     } catch (error) {
//         return res.status(400).json({ error: 'Erro ao criar transação' });
//     }
// };

// export { criarTrasnsactions };


import { zodSchemaTransaction } from '../models/zodSchemaTransaction.js';
import { criarTrasnsactionsUseCase } from '../usecases/criarTrasnsactionsUseCases.js';

const criarTrasnsactions = async (req, res) => {
    try {
        const data = req.body;
        
        // Valida os dados da solicitação
        const parsedData = zodSchemaTransaction.parse(data);

        // Se a validação passar, continue com o caso de uso
        const transaction = await criarTrasnsactionsUseCase.execute(parsedData);
        return res.status(201).json(transaction);
    } catch (error) {
        // Se a validação falhar, retorne um erro
        if (error.errors) {
            // Erros de validação do Zod
            return res.status(400).json({ error: 'Erro de validação', details: error.errors });
        } else {
            // Outros erros
            return res.status(400).json({ error: 'Erro ao criar transação' });
        }
    }
};

export { criarTrasnsactions };

