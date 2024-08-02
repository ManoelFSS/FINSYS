import { editTrasnsactionsUseCase } from '../usecases/editTransactionUseCases.js';

const editTrasnsaction = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const transaction = await editTrasnsactionsUseCase.execute(id, data);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
};

export { editTrasnsaction };