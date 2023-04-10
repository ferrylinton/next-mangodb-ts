
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPosts, insertPost } from '@/services/post-service';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    if (req.method === 'GET') {
        try {
            const posts = await getPosts();
            res.status(200).json(posts);
        } catch (err: any) {
            console.log(err);
            const message = err.message;
            res.status(500).send({ message });
        }
    } else if (req.method === 'POST') {
        try {
            const post = await insertPost(req.body);
            res.status(201).json(post);
        } catch (err: any) {
            console.log(err);
            const message = err.message
            res.status(500).send({ message });
        }

    } else {
        res.status(405).json({ message: `${req.method} Not Allowed` });
    }
}

export default handler;