import { ObjectId } from "mongodb";
import { hash } from 'bcrypt';
import clientPromise from "@/db/connection";
import { COLLECTION_USERS } from "@/db/constant";


export const insertUser = async (body: any): Promise<any> => {
    const client = await clientPromise;
    body.password = await hash(body.password, 10);
    
    const { insertedId } = await client.db().collection(COLLECTION_USERS).insertOne(body);
    return await client.db().collection(COLLECTION_USERS).findOne({
        _id: new ObjectId(insertedId),
    });
}

export const getUsers = async (): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(COLLECTION_USERS).find({}).limit(20).toArray();
}