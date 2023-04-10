exports.createProductSchema = async (client, collectionNames) => {
    try {
        if(collectionNames && collectionNames.include('products'))
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
        console.log("Product Schema Created");
    
        await client
            .db()
            .collection("products")
            .createIndex({ name: 1 }, { unique: true });
            
        console.log("Name index created for unique constraint");
    } catch (error) {
        console.log(error.message);
    }
    
};

//module.exports = createProductSchema;