import { z } from 'zod';

const zodSchemaTransaction = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  category: z.string().min(1, 'Category is required'),
  amount: z.number().min(0, 'Amount must be a positive number'),
});

export { zodSchemaTransaction };