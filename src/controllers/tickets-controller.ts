import { Response } from 'express';
// import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { ticketsService } from '@/services';

export async function getAllTicketTypes(req: AuthenticatedRequest, res: Response) {
    const result = await ticketsService.getAllTicketTypes();
    return res.send(result)
}

// export async function singInPost(req: Request, res: Response) {
//   const { email, password } = req.body as SignInParams;

//   const result = await authenticationService.signIn({ email, password });

//   return res.status(httpStatus.OK).send(result);
// }
