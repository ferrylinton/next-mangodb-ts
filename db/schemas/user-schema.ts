import { MongoClient } from "mongodb";
import { COLLECTION_USERS } from "../constant";

export const createUserSchema = async (client: MongoClient, collectionNames: String[] = []) => {
    try {
        if (!collectionNames.includes(COLLECTION_USERS)) {
            await client.db().createCollection(COLLECTION_USERS, {
                storageEngine: {
                    wiredTiger: {},
                },
                capped : true, 
                size : 200000, 
                max : 100,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        title: COLLECTION_USERS,
                        additionalProperties: false,
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            email: {
                                bsonType: "string",
                            },
                            password: {
                                bsonType: "string",
                            },
                            roleId: {
                                bsonType: "objectId",
                            },
                            locked: {
                                bsonType: 'bool',
                                description: 'It can only be true or false'
                            }
                        },
                        required: ["email", "password", "roleId", "locked"],
                    },
                },
                validationLevel: "strict",
                validationAction: "error",
            });

            await client
                .db()
                .collection(COLLECTION_USERS)
                .createIndex({ email: 1 }, { unique: true });
        }
    } catch (error) {
        console.error(error);
    }

};
