import { trasnsactionsRepositoryInMemory } from "../repositories/trasnsactionsRepositoryInMemory.js";

const criarTrasnsactionsUseCase = {
    execute(data) {
        const trasnsactionsRepository = new trasnsactionsRepositoryInMemory();
    
         // Cria a transação
         const transaction = trasnsactionsRepository.create(data);
        
         // Retorna a transação criada
         return transaction;
       
    }
}

export { criarTrasnsactionsUseCase };
