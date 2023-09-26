import { ticketsRepository } from '@/repositories';


async function getAllTicketTypes() {
    return await ticketsRepository.getAllTicketTypes()
}

export const ticketsService = {
    getAllTicketTypes,

};
  