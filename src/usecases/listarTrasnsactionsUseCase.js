import { TransactionsRepository } from '../repositories/trasnsactionsRepositoryInMemory.js';

const listarTrasnsactionsUseCase = {
    async execute() {
        const transactionsRepository = new TransactionsRepository();
        try {
            const transactions = await transactionsRepository.findAll();
            return transactions;
        } catch (error) {
            console.error('Erro ao listar transações:', error);
            throw error;
        }
    }
};

export { listarTrasnsactionsUseCase };
