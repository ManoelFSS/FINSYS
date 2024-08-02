import { listarTrasnsactionsUseCase } from '../usecases/listarTrasnsactionsUseCase.js'; // Verifique se o nome e o caminho estão corretos

const listarTrasnsactions = async (req, res) => {
    try {
        const transactions = await listarTrasnsactionsUseCase.execute();
        return res.status(200).json(transactions);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export { listarTrasnsactions };
