import dotenv from "dotenv";
import { MongoClient } from 'mongodb';
import { createAuthoritySchema } from "./db/schemas/authority-schema";
import { createRoleSchema } from "./db/schemas/role-schema";
import { createUserSchema } from "./db/schemas/user-schema";


dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://admin:password@127.0.0.1:27017/practice?authMechanism=DEFAULT&authSource=admin');

(async () => {
    try {
        console.log('connecting to mongodb ...');
        await client.connect();

        const collections = await client.db().listCollections().toArray();
        const collectionNames = collections.map(c => c.name);

        await createAuthoritySchema(client, collectionNames);
        await createRoleSchema(client, collectionNames);
        await createUserSchema(client, collectionNames);

        console.log('close connection to mongodb ...');
        await client.close()

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()
