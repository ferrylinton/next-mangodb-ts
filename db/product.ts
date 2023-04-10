import { MongoClient } from "mongodb";

export const createProductSchema = async (client: MongoClient, collectionNames: String[] = []) => {
    try {
        if (!collectionNames.includes('products')) {
            await client.db().createCollection("products", {
                storageEngine: {
                    wiredTiger: {},
                },
                capped: false,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        title: "products",
                        additionalProperties: false,
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            name: {
                                bsonType: "string",
                            },
                            price: {
                                bsonType: "number",
                            },
                            quantity: {
                                bsonType: "number",
                            },
                            coupon: {
                                bsonType: "string",
                            }
                        },
                        required: ["name", "quantity", "price"],
                    },
                },
                validationLevel: "strict",
                validationAction: "error",
            });
            
            await client
                .db()
                .collection("products")
                .createIndex({ name: 1 }, { unique: true });

        }
    } catch (error) {
        console.error(error);
    }

};

//module.exports = createProductSchema;