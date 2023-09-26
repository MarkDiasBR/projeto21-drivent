import { prisma } from '@/config';

async function getAllTicketTypes() {
    return await prisma.ticketType.findMany();
}

export const ticketsRepository = {
    getAllTicketTypes,
}