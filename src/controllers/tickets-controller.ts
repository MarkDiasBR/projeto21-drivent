import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import { ticketsService } from '@/services';
import { CreateTicket } from '@/protocols';
import httpStatus from 'http-status';

export async function getAllTicketTypes(req: AuthenticatedRequest, res: Response) {
    const result = await ticketsService.getAllTicketTypes();
    return res.send(result);
}

export async function getTicketsByUserId(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const result = await ticketsService.getTicketsByUserId(userId);
    return res.send(result)
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId as number;
    const body = req.body as CreateTicket;

    const result = await ticketsService.createTicket(userId, body.ticketTypeId)
    return res.status(httpStatus.CREATED).send(result);
}
