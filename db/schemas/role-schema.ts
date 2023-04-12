import { MongoClient } from "mongodb";
import { COLLECTION_ROLES } from "../constant";


export const createRoleSchema = async (client: MongoClient, collectionNames: String[] = []) => {
    try {
        if (!collectionNames.includes(COLLECTION_ROLES)) {
            await client.db().createCollection(COLLECTION_ROLES, {
                storageEngine: {
                    wiredTiger: {},
                },
                capped : true, 
                size : 200000, 
                max : 100,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        title: COLLECTION_ROLES,
                        additionalProperties: false,
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            name: {
                                bsonType: "string",
                            },
                            authorityIds: {
                                bsonType: "array",
                                description: "Authority ID must be an array of strings",
                                minItems: 1,
                                uniqueItems: true,
                                items: {
                                    bsonType: "objectId"
                                }
                            }
                        },
                        required: ["name", "authorityIds"],
                    },
                },
                validationLevel: "strict",
                validationAction: "error",
            });

            await client
                .db()
                .collection(COLLECTION_ROLES)
                .createIndex({ name: 1 }, { unique: true });

        }

    } catch (error) {
        console.error(error);
    }

};
