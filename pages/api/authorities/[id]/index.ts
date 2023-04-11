import type { NextApiRequest, NextApiResponse } from 'next';
import * as authorityController from '@/controllers/authority-controller';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const method = req.method;

    switch (method) {
        case 'GET':
            authorityController.findOneById(req, res);
            break;

        case 'PUT':
            authorityController.update(req, res);
            break;

        case 'DELETE':
            authorityController.deleteOneById(req, res);
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`${method} Not Allowed`);
            break;
    }

}

export default handler;