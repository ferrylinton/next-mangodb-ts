import { ObjectId } from "mongodb";
import clientPromise from "@/db/connection";
import { COLLECTION_ROLES } from "@/db/constant";


export const insertRole = async (body: any): Promise<any> => {
    const client = await clientPromise;
    const { insertedId } = await client.db().collection(COLLECTION_ROLES).insertOne(body);
    return await client.db().collection(COLLECTION_ROLES).findOne({
        _id: new ObjectId(insertedId),
    });
}

export const getRoles = async (): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(COLLECTION_ROLES).find({}).limit(20).toArray();
}