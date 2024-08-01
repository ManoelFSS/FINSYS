import { trasnsactions } from '../infra/database/inMemory.js';

class trasnsactionsRepositoryInMemory {
    create(data) {

        const DATE = new Date();
        const yers = DATE.getFullYear();
        const month = DATE.getMonth();
        const day = DATE.getDate();
        
        const Dataformatada = `${day}/${month}/${yers}`;

        const trasnsaction = {
            id: trasnsactions.length + 1,
            title: data.title || 'Freelance de website',
            type: data.type || 'deposit',
            category: data.category || 'Dev',
            amount: data.amount || 6000,
            createDate: Dataformatada,
        };
        trasnsactions.push(trasnsaction);
        return trasnsactions;  // Retorna a transação criada
    }

    findALL() { 
        return trasnsactions;
    }
}

export { trasnsactionsRepositoryInMemory };
