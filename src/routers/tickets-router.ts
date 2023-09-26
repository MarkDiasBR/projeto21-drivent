import { getAllTicketTypes, getTicketsByUserId, createTicket } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { createTicketSchema } from '@/schemas/tickets-schemas';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getAllTicketTypes)
    .get('/', getTicketsByUserId)
    .post('/', validateBody(createTicketSchema), createTicket);

export { ticketsRouter };
