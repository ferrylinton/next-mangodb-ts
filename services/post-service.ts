import { ObjectId } from "mongodb";
import clientPromise from "@/db/connection";


const POSTS = "posts";

export const insertPost = async (body: any): Promise<any> => {
    const client = await clientPromise;
    const { insertedId } = await client.db().collection(POSTS).insertOne(body);
    return await client.db().collection(POSTS).findOne({
        _id: new ObjectId(insertedId),
    });
}

export const getPosts = async (): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(POSTS).find({}).limit(20).toArray();
}