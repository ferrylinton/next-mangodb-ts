import { ObjectId } from "mongodb";
import clientPromise from "@/db/connection";
import { COLLECTION_AUTHORITIES } from "@/db/constant";
import { PAGE_SIZE } from "./constant";


export const find = async (keyword: string, page: number): Promise<any> => {
    const pipeline = [
        {
            '$match': {
                'name': new RegExp(keyword, 'i')
            }
        }, {
            '$project': {
                '_id': {
                    '$toString': '$_id'
                },
                'name': 1
            }
        }, {
            '$replaceRoot': {
                'newRoot': {
                    'id': '$_id',
                    'name': '$name'
                }
            }
        }, {
            '$sort': {
                'name': -1
            }
        }, {
            '$facet': {
                'data': [
                    {
                        '$skip': (page - 1) * PAGE_SIZE
                    }, {
                        '$limit': PAGE_SIZE
                    }
                ],
                'pagination': [
                    {
                        '$count': 'total'
                    }
                ]
            }
        }, {
            '$unwind': '$pagination'
        }
    ];

    const client = await clientPromise;
    const arr = await client.db().collection(COLLECTION_AUTHORITIES).aggregate(pipeline).toArray();

    if(arr.length){
        const result = arr[0];
        result.pagination.page = page;
        result.pagination.pageSize = PAGE_SIZE;
        result.pagination.keyword = keyword;
        return result;
    }else{
        return {
            data: [],
            pagination: {
                count: 0,
                page,
                pageSize: PAGE_SIZE,
                keyword
            }
        }
    }
}

export const findOneById = async (id: string): Promise<any> => {

    if (!ObjectId.isValid(id)) {
        return null;
    }

    const filter = {
        _id: new ObjectId(id)
    };

    const options = {
        projection: { _id: 0, name: 1 }
    };


    const client = await clientPromise;
    const authority = await client.db().collection(COLLECTION_AUTHORITIES).findOne(filter, options);

    if (authority) {
        return { id, ...authority };
    } else {
        return null;
    }
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

    if (authority) {
        return await client.db().collection(COLLECTION_AUTHORITIES).findOne({
            _id: new ObjectId(id?.toString())
        });
    } else {
        return null;
    }

}

export const deleteOneById = async (id: string | string[] | undefined): Promise<any> => {
    const client = await clientPromise;
    const authority = await client.db().collection(COLLECTION_AUTHORITIES).findOne({
        _id: new ObjectId(id?.toString())
    });

    if (authority) {
        await client.db().collection(COLLECTION_AUTHORITIES).deleteOne({
            _id: new ObjectId(id?.toString())
        });

        return authority;
    }

    return null;
}