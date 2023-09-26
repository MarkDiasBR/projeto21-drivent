import { enrollmentRepository, ticketsRepository } from '@/repositories';
import { invalidDataError, notFoundError } from '@/errors';
import { TicketStatus } from '@prisma/client';

async function getAllTicketTypes() {
    return await ticketsRepository.getAllTicketTypes()
}

async function getTicketsByUserId(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.getTicketByEnrollmentId(enrollment.id)
    if (!ticket) throw notFoundError();

    return ticket;
}

async function createTicket(userId: number, ticketTypeId: number) {
    if (!ticketTypeId) throw invalidDataError("ticketTypeId is missing");
    
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.createTicket(enrollment.id, ticketTypeId, TicketStatus.RESERVED)
    return ticket
}

export const ticketsService = {
    getAllTicketTypes,
    getTicketsByUserId,
    createTicket
};
  