import { ObjectId } from "mongodb";
import clientPromise from "@/db/connection";
import { COLLECTION_AUTHORITIES } from "@/db/constant";

export const find = async (): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(COLLECTION_AUTHORITIES).find({}).toArray();
}

export const findOneById = async (id: string | string[] | undefined): Promise<any> => {
    const client = await clientPromise;
    return await client.db().collection(COLLECTION_AUTHORITIES).findOne({
        _id: new ObjectId(id?.toString()),
    });
}

export const save = async (body: any): Promise<any> => {
    const client = await clientPromise;
    const { insertedId } = await client.db().collection(COLLECTION_AUTHORITIES).insertOne(body);
    return await client.db().collection(COLLECTION_AUTHORITIES).findOne({
        _id: new ObjectId(insertedId),
    });
}

export const update = async (id: string | string[] | undefined, body: any): Promise<any> => {
    const client = await clientPromise;
    const { name } = body;

    const authority = await client.db().collection(COLLECTION_AUTHORITIES).updateOne(
        {
            _id: new ObjectId(id?.toString())
        },
        {
            $set: {
                name
            }
        }
    );

    if(authority){
        return await client.db().collection(COLLECTION_AUTHORITIES).findOne({
            _id: new ObjectId(id?.toString())
        });
    }else{
        return null;
    }
    
}

export const deleteOneById = async (id: string | string[] | undefined): Promise<any> => {
    const client = await clientPromise;
    const authority = await client.db().collection(COLLECTION_AUTHORITIES).findOne({
        _id: new ObjectId(id?.toString())
    });

    if(authority){
        await client.db().collection(COLLECTION_AUTHORITIES).deleteOne({
            _id: new ObjectId(id?.toString())
        });
        
        return authority;
    }

    return null;
}