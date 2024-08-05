import { trasnsactions } from '../infra/database/inMemory.js';

// class trasnsactionsRepositoryInMemory {
//     create(data) {

//         const DATE = new Date();
//         const yers = DATE.getFullYear();
//         const month = DATE.getMonth();
//         const day = DATE.getDate();
        
//         const Dataformatada = `${day}/${month}/${yers}`;

//         const trasnsaction = {
//             id: trasnsactions.length + 1,
//             title: data.title || 'Freelance de website',
//             type: data.type || 'deposit',
//             category: data.category || 'Dev',
//             amount: data.amount || 6000,
//             createDate: Dataformatada,
//         };
//         trasnsactions.push(trasnsaction);
//         return trasnsactions;  // Retorna a transação criada
//     }

//     getTrasnsactions() { 
//         return trasnsactions;
//     }
// }

// export { trasnsactionsRepositoryInMemory };


import Transaction from '../models/transactionModel.js';

class TransactionsRepository {
    async create(data) {
        
        const DATE = new Date();
        const year = DATE.getFullYear();
        const month = DATE.getMonth() + 1; // Mês começa em 1
        const day = DATE.getDate();
        const dia = day < 10 ? '0' + day : day;
        
        const Dataformatada = `${dia}/${month}/${year}`;

        const transaction = new Transaction({
            title: data.title,
            type: data.type,
            category: data.category,
            amount: data.amount,
            createDate: Dataformatada,
        });

        trasnsactions.push(transaction);

        await transaction.save();
        return transaction;
    }


     // Encontra todas as transações
    async findAll() {
        return await Transaction.find();
    }

    // Encontra uma transação pelo ID
    async findById(id) {
        return await Transaction.findById(id);
    }

   
    // Atualiza uma transação pelo ID
    async update(id, data) {
        return await Transaction.findByIdAndUpdate(id, data, { new: true });
    }

    // Deleta uma transação pelo ID
    async delete(id) {
        return await Transaction.findByIdAndDelete(id);
    }
}

export { TransactionsRepository };




