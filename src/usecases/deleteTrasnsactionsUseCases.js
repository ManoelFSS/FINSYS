import { TransactionsRepository } from '../repositories/trasnsactionsRepositoryInMemory.js';


const deleteTrasnsactionsUseCase = {
    async execute(id, data) {
        const transactionsRepository = new TransactionsRepository();
        try {
            const transaction = await transactionsRepository.delete(id, data);
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


export { deleteTrasnsactionsUseCase };