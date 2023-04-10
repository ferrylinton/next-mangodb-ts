import { ObjectId } from "mongodb";
import clientPromise from "@/db/connection";
import { COLLECTION_AUTHORITIES } from "@/db/constant";


export const insertAuthority = async (body: any): Promise<any> => {
    const client = await clientPromise;
    const { insertedId } = await client.db().collection(COLLECTION_AUTHORITIES).insertOne(body);
    return await client.db().collection(COLLECTION_AUTHORITIES).findOne({
        _id: new ObjectId(insertedId),
    });
}

export const getAuthorities = async (): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(COLLECTION_AUTHORITIES).find({}).limit(20).toArray();
}