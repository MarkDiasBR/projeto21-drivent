import { getAllTicketTypes } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getAllTicketTypes)
    .post('/',/*  validateBody() */ );

export { ticketsRouter };
