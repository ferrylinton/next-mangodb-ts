import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/libs/mongodb';
import { ObjectId } from 'mongodb';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const method = req.method;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const client = await clientPromise;
                const db = client.db("posts");
                const posts = await db.collection("posts").findOne({
                    _id: new ObjectId(id?.toString()),
                });

                if(posts){
                    res.status(200).json(posts);
                }else{
                    res.status(404).json({message : `Data with id=${id} is not found`});
                }
                
            } catch (err: any) {
                console.log(err);
                const message = err.message;
                res.status(500).send({ message });
            }
            break;

        case 'PUT':
            try {
                const { title, content } = req.body;
                const client = await clientPromise;
                const db = client.db("posts");
                const posts = await db.collection("posts").updateOne(
                    {
                        _id: new ObjectId(id?.toString()),
                    },
                    {
                        $set: {
                            title: title,
                            content: content,
                        },
                    }
                );

                res.status(200).json(posts);

            } catch (err: any) {
                console.log(err);
                const message = err.message;
                res.status(500).send({ message });
            }
            break;

        case 'PATCH':
            //some code...
            res.status(200).json({ id })
            break;

        case 'DELETE':
            try {
                const client = await clientPromise;
                const db = client.db("posts");
                const posts = await db.collection("posts").deleteOne({
                    _id: new ObjectId(id?.toString()),
                });

                res.status(200).json(posts);

            } catch (err: any) {
                console.log(err);
                const message = err.message;
                res.status(500).send({ message });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE']);
            res.status(405).end(`${method} Not Allowed`);
            break;
    }

}

export default handler;