import { TransactionsRepository } from '../repositories/trasnsactionsRepositoryInMemory.js';


const editTrasnsactionsUseCase = {
    async execute(id, data) {
        const transactionsRepository = new TransactionsRepository();
        try {
            const transaction = await transactionsRepository.update(id, data);
            if (!transaction) {
                throw new Error('Transação não encontrada');
            }
            return transaction;
        } catch (error) {
            console.error('Erro ao atualizar transação:', error);
            throw error;
        }
    }
};


export { editTrasnsactionsUseCase };