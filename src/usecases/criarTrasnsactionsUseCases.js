import { TransactionsRepository } from '../repositories/trasnsactionsRepositoryInMemory.js';

const criarTrasnsactionsUseCase = {
    async execute(data) {
        const transactionsRepository = new TransactionsRepository();
        try {
            const transaction = await transactionsRepository.create(data);
            return transaction;
        } catch (error) {
            console.error('Erro ao criar transação:', error);
            throw error;
        }
    }
};

export { criarTrasnsactionsUseCase };

