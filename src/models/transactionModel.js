import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    title: { type: String, },
    type: { type: String, },
    category: { type: String, },
    amount: { type: Number, },
    createDate: { type: String,},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
