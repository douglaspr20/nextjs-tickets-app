import { z } from 'zod';

export const ticketSchema = z.object({
  title: z.string().min(3, 'The title must be at least 3 characters long'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high'], {
    error: 'Priority must be one of: low, medium, high',
  }),
});

export type TicketInput = z.infer<typeof ticketSchema>;
