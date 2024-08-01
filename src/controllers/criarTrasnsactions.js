import { criarTrasnsactionsUseCase } from '../usecases/criarTrasnsactionsUseCases.js';

const criarTrasnsactions = (req, res) => {
   
    const trasnsaction = criarTrasnsactionsUseCase.execute( req.body );

    // Verifica se a transação foi criada com sucesso
    if (trasnsaction) {
        return res.status(201).json(trasnsaction);
    }

    // Se a transação não foi criada, retorna erro 400
    return res.status(400).json({ error: 'Erro ao criar transação' });
};

export { criarTrasnsactions };
