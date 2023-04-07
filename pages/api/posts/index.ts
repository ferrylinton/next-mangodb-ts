
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/libs/mongodb';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    if (req.method === 'GET') {
        try {
            const client = await clientPromise;
            const db = client.db("posts");
            const posts = await db.collection("posts").find({}).limit(20).toArray();
            res.status(201).json(posts);

        } catch (err: any) {
            console.log(err);
            const message = err.message;
            res.status(500).send({ message });
        }
    } else if (req.method === 'POST') {
        try {
            console.log(req.body);
            const client = await clientPromise;
            const db = client.db("posts");
            const { title, content } = req.body;

            const post = await db.collection("posts").insertOne({
                title,
                content,
            });

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