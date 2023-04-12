import { MongoClient } from "mongodb";
import { COLLECTION_AUTHORITIES } from "@/db/constant";


export const createAuthoritySchema = async (client: MongoClient, collectionNames: String[] = []) => {
    try {
        if (!collectionNames.includes(COLLECTION_AUTHORITIES)) {
            await client.db().createCollection(COLLECTION_AUTHORITIES, {
                storageEngine: {
                    wiredTiger: {},
                },
                capped : true, 
                size : 200000, 
                max : 100,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        title: COLLECTION_AUTHORITIES,
                        additionalProperties: false,
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            name: {
                                bsonType: "string",
                            }
                        },
                        required: ["name"],
                    },
                },
                validationLevel: "strict",
                validationAction: "error",
            });

            await client
                .db()
                .collection(COLLECTION_AUTHORITIES)
                .createIndex({ name: 1 }, { unique: true });

        }

    } catch (error) {
        console.error(error);
    }

};
