import { prisma } from '@/config';
import { TicketStatus } from '@prisma/client';

async function getAllTicketTypes() {
    return await prisma.ticketType.findMany();
}

async function getTicketByEnrollmentId(enrollmentId: number) {
    return await prisma.ticket.findUnique({
        where: {
            enrollmentId
        },
        include: {
            TicketType: true
        }
    })
}

async function createTicket(enrollmentId: number, ticketTypeId: number, status: TicketStatus) {
    return await prisma.ticket.create({
        data: {
            enrollmentId,
            ticketTypeId,
            status
        },
        include: {
            TicketType: true
        }
    })
}

export const ticketsRepository = {
    getAllTicketTypes,
    getTicketByEnrollmentId,
    createTicket
}